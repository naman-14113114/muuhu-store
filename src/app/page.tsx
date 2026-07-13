import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { market } from "@/lib/market";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best Hair Dryer US | Muuhu Hair Styler",
  description:
    "Shop Muuhu US for the ultimate hair styler. Features a 110,000 RPM motor, 200 million negative ions, auto-wrap curlers, and free tracked shipping.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "best hair dryer UK",
    "hair styler UK",
    "muuhu hair dryer",
    "high speed hair dryer",
    "auto wrap curler",
  ],
  openGraph: {
    title: "Best Hair Dryer US | Muuhu",
    description:
      "Discover the Muuhu Hair Dryer with 110,000 RPM motor, ionic tech, and 7 styling attachments.",
    url: market.siteUrl,
    images: [
      {
        url: "/images/products/muuhu-hair-dryer/01-muuhu-hair-dryer-hero.webp",
        width: 1200,
        height: 900,
        alt: "Muuhu Hair Dryer",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      {[organizationJsonLd(), websiteJsonLd()].map((schema, index) => (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          key={index}
          type="application/ld+json"
        />
      ))}
      <HomePage />
    </>
  );
}
