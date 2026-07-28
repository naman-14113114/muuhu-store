import type { Metadata } from "next";
import { PolicyPage } from "@/components/policies/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Muuhu",
  description: "Understand how Muuhu collects, protects, and handles personal information when you browse or place an order.",
  alternates: {
    canonical: "/policies/privacy-policy",
  },
};

export default function Page() {
  return <PolicyPage policyType="privacy-policy" />;
}
