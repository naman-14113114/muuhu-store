import type { Metadata } from "next";
import { PolicyPage } from "@/components/policies/PolicyPage";

export const metadata: Metadata = {
  title: "Return Policy | Muuhu",
  description: "Read the Muuhu return and replacement policy for AirPro hair styling orders.",
  alternates: {
    canonical: "/policies/return-policy",
  },
};

export default function Page() {
  return <PolicyPage policyType="return-policy" />;
}
