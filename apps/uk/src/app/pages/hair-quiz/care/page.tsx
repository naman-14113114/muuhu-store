import type { Metadata } from "next";
import { HairCareQuizPage } from "@/components/quiz/HairCareQuizPage";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Haircare Quiz — Your Personalised Routine | Muuhu",
  description:
    "Answer a few questions and get a personalised 4-week haircare routine built around the Muuhu 7-in-1 Hair Dryer.",
  alternates: { canonical: "/pages/hair-quiz/care" },
  openGraph: {
    title: "Haircare Quiz — Your Personalised Routine",
    description:
      "A 60-second assessment for a repair and protection routine shaped around your hair.",
    url: absoluteUrl("/pages/hair-quiz/care"),
  },
};

export default function Page() {
  return <HairCareQuizPage />;
}
