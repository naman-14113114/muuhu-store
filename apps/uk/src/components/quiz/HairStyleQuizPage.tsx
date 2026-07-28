"use client";

import Image from "next/image";
import { ShieldCheck, Sparkles } from "lucide-react";
import { HairQuizFlow } from "@/components/quiz/HairQuizFlow";
import { emptyHairStyleAnswers, hairStyleQuestions } from "@/data/hairQuiz";
import { buildHairStyleResult } from "@/lib/hairQuiz";

export function HairStyleQuizPage() {
  return (
    <section className="buudy-section bg-[var(--cream)] py-12 md:py-18 lg:py-24">
      <div className="buudy-glow -left-28 top-8 h-[420px] w-[420px] bg-[#f4a17b]" />
      <div className="buudy-glow -right-36 bottom-20 h-[500px] w-[500px] bg-[#a05080]" />

      <div className="buudy-wrap relative z-10">
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className="buudy-eyebrow">Personalised styling</p>
          <h1 className="buudy-display mt-4 text-[3rem] leading-[.98] text-[var(--plum)] md:text-[5.4rem]">
            The looks you love,{" "}
            <em className="buudy-italic text-[var(--gold)]">mapped out</em>.
          </h1>
          <p className="buudy-copy mt-5 max-w-2xl">
            A 60-second assessment that turns the styles you want into a routine
            built around your attachments and skill level.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <aside className="lg:sticky lg:top-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[var(--plum)]">
              <Image
                alt="Muuhu AirPro styling looks"
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 92vw"
                src="/images/products/muuhu-hair-dryer/01-amazing-hairstyles.webp"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(23,10,24,.88))] p-6 pt-24 text-[var(--cream)]">
                <p className="buudy-mono text-[var(--gold)]">Curls, waves, blowouts</p>
                <p className="buudy-display mt-2 text-3xl leading-tight">
                  One tool, every look you want.
                </p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 rounded-[14px] border border-[var(--border)] bg-[var(--card)] p-4">
                <Sparkles className="shrink-0 text-[var(--gold)]" size={18} />
                <span className="text-xs font-semibold leading-5 text-[var(--plum)]">
                  Attachment guide
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-[14px] border border-[var(--border)] bg-[var(--card)] p-4">
                <ShieldCheck className="shrink-0 text-[var(--gold)]" size={18} />
                <span className="text-xs font-semibold leading-5 text-[var(--plum)]">
                  Coanda, no extreme heat
                </span>
              </div>
            </div>
          </aside>

          <HairQuizFlow
            track="style"
            storageKey="muuhu:hairstyle-quiz:v1"
            emptyAnswers={emptyHairStyleAnswers}
            questions={hairStyleQuestions}
            buildResult={buildHairStyleResult}
            productHref="/products/muuhu-hair-dryer"
            ctaCopy="Get the Muuhu AirPro and unlock your full 4-week plan, with attachment mastery and your signature look."
            ctaLabel="Get the Hair Dryer"
            intro={{
              eyebrow: "60-second assessment",
              title: "Build your custom",
              titleAccent: "look.",
              copy: "Discover the exact attachments and techniques for the styles you love, based on your length and skill level.",
              startLabel: "Start assessment",
              bullets: ["5 focused questions", "Instant routine", "Weeks 3 & 4 unlocked with the dryer"],
            }}
          />
        </div>
      </div>
    </section>
  );
}
