import type { Metadata } from "next";
import { PolicyPage } from "@/components/policies/PolicyPage";

export const metadata: Metadata = {
  title: "Shipping Policy | Muuhu",
  description: "Read Muuhu processing times, delivery estimates, tracking rules, and shipping information.",
  alternates: {
    canonical: "/policies/shipping-policy",
  },
};

export default function Page() {
  return <PolicyPage policyType="shipping-policy" />;
}
