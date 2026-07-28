import type { Metadata } from "next";
import { FaqPage } from "@/components/faq/FaqPage";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Help & Support - Muuhu",
  description:
    "Find answers about Muuhu AirPro specifications, delivery, returns, order tracking, payment methods, and support.",
  alternates: {
    canonical: "/pages/faqs",
  },
  openGraph: {
    title: "Muuhu Help Center | Frequently Asked Questions",
    description:
      "Find answers about Muuhu AirPro specifications, delivery, returns, order tracking, payment methods, and support.",
    url: absoluteUrl("/pages/faqs"),
  },
};

export default function Page() {
  return <FaqPage />;
}
