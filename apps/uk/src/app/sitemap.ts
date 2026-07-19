import type { MetadataRoute } from "next";
import { market } from "@/lib/market";

const routes = [
  { path: "/", lastModified: "2026-07-19" },
  { path: "/products/muuhu-hair-dryer", lastModified: "2026-07-19" },
  { path: "/products/muuhu-comb", lastModified: "2026-07-19" },
  { path: "/pages/contact-us", lastModified: "2026-06-16" },
  { path: "/pages/about-us", lastModified: "2026-06-16" },
  { path: "/pages/faqs", lastModified: "2026-06-16" },
  { path: "/pages/hair-quiz", lastModified: "2026-07-18" },
  { path: "/pages/hair-quiz/care", lastModified: "2026-07-18" },
  { path: "/pages/hair-quiz/style", lastModified: "2026-07-18" },
  { path: "/blog", lastModified: "2026-07-19" },
  { path: "/blog/best-hair-dryer-uk-2026", lastModified: "2026-07-19" },
  { path: "/blog/best-hair-dryer-for-frizzy-hair-uk", lastModified: "2026-07-19" },
  { path: "/blog/best-hair-dryer-for-curly-hair-uk", lastModified: "2026-07-19" },
  { path: "/blog/hair-dryer-attachments-guide", lastModified: "2026-07-19" },
  { path: "/blog/dyson-airwrap-alternative-uk", lastModified: "2026-07-19" },
  { path: "/blog/salon-blowout-at-home-uk", lastModified: "2026-07-19" },
  { path: "/policies/shipping-policy", lastModified: "2026-06-16" },
  { path: "/policies/return-policy", lastModified: "2026-06-16" },
  { path: "/policies/refund-policy", lastModified: "2026-06-16" },
  { path: "/policies/privacy-policy", lastModified: "2026-06-16" },
  { path: "/policies/terms-of-service", lastModified: "2026-06-16" },
  { path: "/policies/cookies-policy", lastModified: "2026-06-16" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${market.siteUrl}${route.path === "/" ? "" : route.path}`,
    lastModified: new Date(route.lastModified),
  }));
}
