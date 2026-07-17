const fallbackCheckoutUrl = "https://muuhu.com/cart";

export function getCheckoutUrl() {
  return process.env.NEXT_PUBLIC_CHECKOUT_URL || fallbackCheckoutUrl;
}
