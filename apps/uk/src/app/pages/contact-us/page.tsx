import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Muuhu for AirPro product questions, order support, shipping help, and styling guidance.",
  alternates: {
    canonical: "/pages/contact-us",
  },
  openGraph: {
    title: "Contact Muuhu",
    description:
      "Reach Muuhu support for AirPro product questions, order support, shipping help, and styling guidance.",
    url: absoluteUrl("/pages/contact-us"),
  },
};

export default function Page() {
  return <ContactPage />;
}
