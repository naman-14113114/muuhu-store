import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | Muuhu AirPro",
  description:
    "Learn about Muuhu, our team of hair care experts, our story of high-speed ionic hair dryer innovation, and our mission to make professional styling simple and safe.",
  alternates: {
    canonical: "/pages/about-us",
  },
  openGraph: {
    title: "About Muuhu | Professional High-Speed Hair Styler",
    description:
      "Learn about our team of hair care experts, our story of high-speed hair styler innovation, and our mission to deliver visible results.",
    url: absoluteUrl("/pages/about-us"),
  },
};

export default function Page() {
  return <AboutPage />;
}
