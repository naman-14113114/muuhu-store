import type { Metadata } from "next";
import { HairQuizLanding } from "@/components/quiz/HairQuizLanding";

export const metadata: Metadata = {
  title: "Muuhu Hair Quiz — Find Your Routine",
  description:
    "Take the Muuhu Hair Quiz. Choose the Haircare or Hairstyle path and get a personalised 4-week routine built around the 7-in-1 Hair Dryer.",
  alternates: { canonical: "/pages/hair-quiz" },
  openGraph: {
    title: "Muuhu Hair Quiz — Find Your Routine",
    description:
      "Choose Haircare or Hairstyle and get a personalised 4-week routine for the Muuhu Airpro.",
    url: "/pages/hair-quiz",
  },
};

export default function Page() {
  return <HairQuizLanding />;
}
