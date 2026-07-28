import type { Metadata } from "next";
import { PolicyPage } from "@/components/policies/PolicyPage";

export const metadata: Metadata = {
  title: "Terms of Service | Muuhu",
  description: "Read the terms and conditions governing use of the Muuhu store and its services.",
  alternates: {
    canonical: "/policies/terms-of-service",
  },
};

export default function Page() {
  return <PolicyPage policyType="terms-of-service" />;
}
