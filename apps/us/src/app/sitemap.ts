import type { MetadataRoute } from "next";
import { market } from "@/lib/market";

const routes = [
  { path: "/", lastModified: "2026-07-19" },
  { path: "/products/muuhu-hair-dryer", lastModified: "2026-07-19" },
  { path: "/products/muuhu-comb", lastModified: "2026-07-19" },
  { path: "/pages/premium-packaging", lastModified: "2026-07-21" },
  { path: "/pages/haircare-ebook", lastModified: "2026-07-21" },
  { path: "/pages/contact-us", lastModified: "2026-06-16" },
  { path: "/pages/about-us", lastModified: "2026-06-16" },
  { path: "/pages/faqs", lastModified: "2026-06-16" },
  { path: "/blog", lastModified: "2026-07-19" },
  { path: "/blog/best-hair-dryer-us-2026", lastModified: "2026-07-19" },
  { path: "/blog/best-hair-dryer-for-frizzy-hair-us", lastModified: "2026-07-19" },
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
