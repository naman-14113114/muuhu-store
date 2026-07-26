import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { market } from "@/lib/market";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best Hair Dryer UK | Muuhu Hair Styler",
  description:
    "Shop Muuhu UK for the ultimate high-speed hair styler. Features 110,000 RPM motor, negative ions for zero frizz, and 7 versatile attachments.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "muuhu hair dryer",
    "high speed hair dryer",
    "best hair dryer UK",
    "hair styler UK",
    "7 in 1 hair styler",
  ],
  openGraph: {
    title: "Best Hair Dryer UK | Muuhu",
    description:
      "Discover the Muuhu Airpro with 110,000 RPM motor, ionic tech, and 7 styling attachments.",
    url: market.siteUrl,
    images: [
      {
        url: "/images/products/muuhu-hair-dryer/01-muuhu-hair-dryer-hero.webp",
        width: 1200,
        height: 900,
        alt: "Muuhu Airpro",
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
