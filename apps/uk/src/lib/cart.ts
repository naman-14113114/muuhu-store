import {
  getProductById,
  getProductBySlug,
  type Product,
} from "@/data/products";

export type CartLineType = "product" | "gift";

export type CartLine = {
  id: string;
  productId: string;
  slug?: string;
  type: CartLineType;
  title: string;
  subtitle?: string;
  image: string;
  unitPriceCents: number;
  compareAtCents?: number;
  quantity: number;
  locked?: boolean;
};

export type CartTotals = {
  itemCount: number;
  subtotalCents: number;
  compareAtCents: number;
  savingsCents: number;
  giftValueCents: number;
  promoDiscountCents: number;
  totalDiscountCents: number;
  shippingCents: number;
  totalCents: number;
};

export type CartState = {
  lines: CartLine[];
  promoCode: string;
  manualPromoCode?: string | null;
  giftMessage: string;
};

export const promoCode = "AUTO";

export const emptyCart: CartState = {
  lines: [],
  promoCode,
  manualPromoCode: "",
  giftMessage: "",
};

export function isValidManualPromoCode(code?: string | null) {
  const normalized = (code ?? "").trim().toUpperCase();
  return normalized === "MUUHU10" || normalized === "SAVE10";
}

export function getAppliedManualPromoCode(manualPromoCode?: string | null) {
  const code = (manualPromoCode ?? "").trim().toUpperCase();
  return isValidManualPromoCode(code) ? code : "";
}

function getGiftSubtitle(giftId: string): string {
  if (giftId.includes("scalppro")) {
    return "5-in-1 Scalp Rejuvenation Comb with Tri-Color LED therapy, EMS microcurrent, soothing vibration, and an 8ml mess-free serum applicator.";
  }
  if (giftId.includes("comb")) {
    return "3-in-1 Red Light Scalp Care & Massage Comb with micro-vibration, red light therapy, and integrated liquid serum applicator.";
  }
  if (giftId.includes("travel-case") || giftId.includes("packaging")) {
    return "Luxury presentation case for safe storage, organisation, and gifting.";
  }
  if (giftId.includes("skincare-guide") || giftId.includes("ebook")) {
    return "Exclusive digital styling guide & haircare masterclass.";
  }
  return "";
}

export function buildProductCartLines(
  product: Product,
  quantity = 1,
): CartLine[] {
  const normalizedQuantity = Math.max(1, Math.round(quantity));

  const productLine: CartLine = {
    id: product.id,
    productId: product.id,
    slug: product.slug,
    type: "product",
    title: product.name,
    subtitle: product.shortDescription,
    image: product.cartImage,
    unitPriceCents: product.priceCents,
    compareAtCents: product.compareAtCents,
    quantity: normalizedQuantity,
  };

  const gifts = product.gifts.map<CartLine>((gift) => ({
    id: `${product.id}:${gift.id}`,
    productId: product.id,
    slug: product.slug,
    type: "gift",
    title: gift.name,
    subtitle: getGiftSubtitle(gift.id),
    image: gift.image,
    unitPriceCents: 0,
    compareAtCents: gift.valueCents,
    quantity: normalizedQuantity,
    locked: true,
  }));

  return [productLine, ...gifts];
}

function findProductForLine(line: CartLine) {
  return (
    getProductById(line.productId) ??
    getProductById(line.id) ??
    (line.slug ? getProductBySlug(line.slug) : undefined)
  );
}

export function normalizeCartLines(lines: CartLine[]) {
  const productLines = lines.filter((line) => line.type === "product");

  return productLines.flatMap((line) => {
    const product = findProductForLine(line);

    if (!product) {
      return [];
    }

    return buildProductCartLines(product, line.quantity);
  });
}

export function upsertProductCartLines(
  lines: CartLine[],
  product: Product,
  quantity: number,
) {
  const withoutProduct = lines.filter((line) => line.productId !== product.id);
  return [...withoutProduct, ...buildProductCartLines(product, quantity)];
}

export function calculateCartTotals(
  lines: CartLine[],
  manualPromoCode?: string | null,
): CartTotals {
  const displayLines = getDisplayLines(lines);
  const productLines = lines.filter((line) => line.type === "product");
  const giftLines = displayLines.filter((line) => line.type === "gift");

  const subtotalCents = productLines.reduce(
    (total, line) => total + line.unitPriceCents * line.quantity,
    0,
  );
  const compareAtCents = productLines.reduce(
    (total, line) =>
      total + (line.compareAtCents ?? line.unitPriceCents) * line.quantity,
    0,
  );
  const giftValueCents = giftLines.reduce(
    (total, line) => total + (line.compareAtCents ?? 0) * line.quantity,
    0,
  );
  const savingsCents = Math.max(compareAtCents - subtotalCents, 0);

  const appliedManualCode = getAppliedManualPromoCode(manualPromoCode);
  const promoDiscountCents = appliedManualCode ? 1000 : 0;
  const totalDiscountCents = savingsCents + giftValueCents + promoDiscountCents;
  const totalCents = Math.max(0, subtotalCents - promoDiscountCents);

  return {
    itemCount: productLines.reduce((total, line) => total + line.quantity, 0),
    subtotalCents,
    compareAtCents,
    savingsCents,
    giftValueCents,
    promoDiscountCents,
    totalDiscountCents,
    shippingCents: 0,
    totalCents,
  };
}

export function getDisplayLines(lines: CartLine[]) {
  return lines
    .map((line) => {
      if (line.productId === "muuhu-hair-dryer" && line.type === "product") {
        return {
          ...line,
          title: "Muuhu Airpro + Premium Packaging",
        };
      }
      return line;
    })
    .filter((line) => {
      if (line.productId === "muuhu-hair-dryer" && line.type === "gift") {
        const giftId = line.id.split(":")[1];
        if (giftId === "travel-case" || giftId === "skincare-guide") {
          return false;
        }
      }
      return true;
    });
}
