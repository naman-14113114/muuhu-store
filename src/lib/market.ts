export const market = {
  siteUrl: "https://us.muuhu.com",
  locale: "en-US",
  currency: "USD",
  country: "United States",
  marketLabel: "US",
  madeInLabel: "Made in US",
  checkoutSource: "us_muuhu",
  checkoutUtmSource: "us.muuhu.com",
  checkoutUtmCampaign: "us_hair_dryer",
  supportHours: "Monday to Friday, 9:00 AM to 5:00 PM EST",
} as const;

export type StoreCurrency = "USD" | "GBP";
