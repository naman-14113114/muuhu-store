import { NextResponse, type NextRequest } from "next/server";
import { appendAttributionToAbsoluteUrl } from "@/lib/attribution";
import { getAppliedManualPromoCode } from "@/lib/cart";
import { buildPlusbaseCheckoutUrl } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const plusbaseOrigin = "https://muuhu.com";

const PLUSBASE_PRODUCTS: Record<string, { productId: number; variantId: number }> = {
  "muuhu-hair-dryer": { productId: 1000000671699723, variantId: 1000020593292001 },
  "muuhu-comb": { productId: 1000000670522361, variantId: 1000020551283771 },
};

type CheckoutPrepareBody = {
  customerEmail?: string;
  quantity?: number;
  cart?: {
    lines: Array<{ id?: string; productId: string; quantity: number; type?: string }>;
    manualPromoCode?: string;
    promoCodes?: string[];
  };
  attribution?: Record<string, string | null | undefined>;
};

const passthroughAttributionKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "msclkid",
  "gclid",
  "fbclid",
];

function buildPlusbaseAttributionProperties(attribution: CheckoutPrepareBody["attribution"]) {
  const properties: Array<{ name: string; value: string }> = [];

  passthroughAttributionKeys.forEach((key) => {
    const value = attribution?.[key];
    if (value) {
      properties.push({ name: `_blfm_${key}`, value: String(value).slice(0, 500) });
    }
  });

  return properties;
}

function bridgeParams(attribution: CheckoutPrepareBody["attribution"]) {
  const params: Record<string, string> = {};

  passthroughAttributionKeys.forEach((key) => {
    const value = attribution?.[key];
    if (value) {
      params[key] = String(value).slice(0, 500);
    }
  });

  return params;
}

function cleanAttribution(attribution: CheckoutPrepareBody["attribution"]) {
  const params: Record<string, string> = {};

  passthroughAttributionKeys.forEach((key) => {
    const value = attribution?.[key];
    if (value) {
      params[key] = String(value).slice(0, 500);
    }
  });

  return params;
}

function getManualPromoFromCart(cart: CheckoutPrepareBody["cart"]) {
  return getAppliedManualPromoCode(
    cart?.manualPromoCode ??
      cart?.promoCodes?.find((code) => getAppliedManualPromoCode(code)),
  );
}

function appendDiscountCodeToUrl(href: string, discountCode: string) {
  if (!discountCode) {
    return href;
  }

  const url = new URL(href);
  url.searchParams.set("discount", discountCode);
  return url.toString();
}

function appendCookies(current: string, response: Response) {
  const headers = response.headers as Headers & {
    getSetCookie?: () => string[];
  };
  const setCookies =
    typeof headers.getSetCookie === "function"
      ? headers.getSetCookie()
      : headers.get("set-cookie")
        ? [headers.get("set-cookie") as string]
        : [];

  if (!setCookies.length) {
    return current;
  }

  const cookieMap = new Map<string, string>();

  current
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .forEach((part) => {
      const [name] = part.split("=");
      cookieMap.set(name, part);
    });

  setCookies.forEach((cookie) => {
    const pair = cookie.split(";")[0];
    const [name] = pair.split("=");
    if (name && pair) {
      cookieMap.set(name, pair);
    }
  });

  return Array.from(cookieMap.values()).join("; ");
}

async function createPlusbaseCheckout(
  quantity: number,
  attribution: CheckoutPrepareBody["attribution"],
  cart?: CheckoutPrepareBody["cart"]
) {
  let cookie = "";

  const createResponse = await fetch(
    `${plusbaseOrigin}/api/checkout/next/cart.json`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
      },
    },
  );
  cookie = appendCookies(cookie, createResponse);

  const createJson = await createResponse.json();
  const cartToken = createJson?.result?.token;
  const checkoutToken = createJson?.result?.checkout_token;

  if (!createResponse.ok || !cartToken || !checkoutToken) {
    throw new Error("Could not create PlusBase cart.");
  }

  async function addItem(
    productId: number,
    variantId: number,
    itemQuantity: number,
    properties: Array<{ name: string; value: string }> = [],
  ) {
    const response = await fetch(
      `${plusbaseOrigin}/api/checkout/next/cart.json?cart_token=${encodeURIComponent(
        cartToken,
      )}`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          ...(cookie ? { cookie } : {}),
        },
        body: JSON.stringify({
          cartItem: {
            product_id: productId,
            variant_id: variantId,
            qty: itemQuantity,
            properties,
            metadata: {
              image_preview_id: "",
            },
          },
          from: "add-to-cart",
        }),
      },
    );
    cookie = appendCookies(cookie, response);

    const json = await response.json();
    if (!response.ok || json?.code !== 0) {
      throw new Error("Could not add item to PlusBase cart.");
    }
  }

  // Add each product line that maps to a known Muuhu PlusBase product.
  // Gift lines carry the parent product's id, so we also resolve the gift's
  // own product slug from line.id (e.g. "muuhu-hair-dryer:muuhu-comb").
  if (cart?.lines && cart.lines.length > 0) {
    for (const line of cart.lines) {
      const key =
        line.type === "gift" || line.id?.includes(":")
          ? (line.id?.split(":").pop() ?? line.productId)
          : line.productId;

      if (key && PLUSBASE_PRODUCTS[key]) {
        await addItem(
          PLUSBASE_PRODUCTS[key].productId,
          PLUSBASE_PRODUCTS[key].variantId,
          line.quantity,
          buildPlusbaseAttributionProperties(attribution),
        );
      }
    }
  } else {
    // Legacy fallback: default to the Muuhu AirPro flagship.
    await addItem(
      PLUSBASE_PRODUCTS["muuhu-hair-dryer"].productId,
      PLUSBASE_PRODUCTS["muuhu-hair-dryer"].variantId,
      quantity,
      buildPlusbaseAttributionProperties(attribution),
    );
  }

  return {
    checkoutToken,
    checkoutUrl: `${plusbaseOrigin}/checkouts/${checkoutToken}`,
  };
}

export async function POST(request: NextRequest) {
  const token = crypto.randomUUID();
  const body = (await request.json().catch(() => ({}))) as CheckoutPrepareBody;
  const quantity = Math.max(1, Math.round(Number(body.quantity) || 1));
  const appliedManualPromoCode = getManualPromoFromCart(body.cart);

  try {
    const checkout = await createPlusbaseCheckout(quantity, body.attribution, body.cart);

    return NextResponse.json({
      checkoutToken: checkout.checkoutToken,
      checkoutUrl: appendAttributionToAbsoluteUrl(
        appendDiscountCodeToUrl(checkout.checkoutUrl, appliedManualPromoCode),
        cleanAttribution(body.attribution),
      ),
    });
  } catch (error) {
    console.error("Direct PlusBase checkout creation failed", error);
  }

  return NextResponse.json({
    checkoutToken: token,
    checkoutUrl: buildPlusbaseCheckoutUrl({
      checkoutRef: token,
      quantity,
      giftQuantity: quantity,
      discountCode: appliedManualPromoCode,
      extraParams: bridgeParams(body.attribution),
    }),
  });
}
