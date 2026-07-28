import type { Metadata } from "next";
import { HairStyleQuizPage } from "@/components/quiz/HairStyleQuizPage";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hairstyle Quiz — Your Personalised Looks | Muuhu",
  description:
    "Answer a few questions and get a personalised 4-week styling routine built around the Muuhu AirPro attachments.",
  alternates: { canonical: "/pages/hair-quiz/style" },
  openGraph: {
    title: "Hairstyle Quiz — Your Personalised Looks",
    description:
      "A 60-second assessment for the styles you love, mapped to your attachments.",
    url: absoluteUrl("/pages/hair-quiz/style"),
  },
};

export default function Page() {
  return <HairStyleQuizPage />;
}
