"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/data/products";
import { ProductHero } from "./ProductHero";
import { FAQSection } from "./FAQSection";
import { GuaranteeSection } from "./GuaranteeSection";
import { StickyAddToCart } from "./StickyAddToCart";
import { ProductReviewsSection } from "./ProductReviewsSection";
import { TrustBadges } from "./TrustBadges";
import { ComparisonTable } from "./ComparisonTable";
import { HairDryerAttachmentBadges } from "./HairDryerAttachmentBadges";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoReviews } from "./VideoReviews";
import { BeforeAfterGrid } from "./BeforeAfterGrid";
import { MuuhuProductFocus, MuuhuAppPromo, MuuhuHairTypeSection } from "./MuuhuFeatureSections";

function HairDryerHeroVideo() {
  return (
    <section className="buudy-section bg-[var(--plum)] py-14 md:py-24">
      <div className="buudy-wrap flex flex-col items-center text-center">
        <SectionHeading
          eyebrow="See it in action"
          title={
            <>
              Professional blowout, <em className="buudy-italic">at home</em>.
            </>
          }
          copy="Watch how easy it is to dry, style, and curl your hair with high-speed airflow."
          invert
        />
        <div className="mt-12 w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl aspect-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/images/products/muuhu-hair-dryer/Hair%20Dryer%20video%20-%202.webm"
          />
        </div>
      </div>
    </section>
  );
}

const technologyStorySections = [
  {
    eyebrow: "AirPro airflow system",
    title: "Powerful, fast, and controlled.",
    copy:
      "A 1,400W, 110,000 RPM brushless motor drives high-speed airflow through the Muuhu AirPro body for fast drying and precise styling. Three temperature settings and three speed settings give smoother control from roots to ends.",
    image: "/images/products/muuhu-hair-dryer/muuhu-airpro-airflow-system-v3.webp",
    alt: "Muuhu AirPro high-speed airflow technology",
    imageSide: "right",
    imageFrame: "wide",
  },
  {
    eyebrow: "Intelligent heat control",
    title: "Protects shine while you style.",
    copy:
      "Muuhu AirPro is designed to dry quickly without relying on harsh, uncontrolled heat. The intelligent heat system keeps airflow consistent, helping protect natural shine while smoothing frizz and flyaways.",
    image: "/images/products/muuhu-hair-dryer/muuhu-airpro-heat-control-detail-transparent-v2.png",
    alt: "Muuhu AirPro intelligent heat control internal technology",
    imageSide: "left",
    imageFrame: "portrait",
  },
] as const;

const hairScienceCards = [
  {
    title: "Enhancing shine",
    copy:
      "Fast, controlled airflow helps smooth the hair surface as you dry, so light reflects more evenly from root to end. Muuhu AirPro is built for a softer, glossier finish without relying on harsh heat.",
    image: "/images/products/muuhu-hair-dryer/hair-science/muuhu-shine-science.webp",
    alt: "Glossy bronde hair showing a smooth reflective finish",
  },
  {
    title: "Supporting scalp comfort",
    copy:
      "Adjustable heat and airflow settings help you dry close to the roots with more control. It is made for everyday styling that feels lighter, calmer, and easier to manage around the scalp.",
    image: "/images/products/muuhu-hair-dryer/hair-science/muuhu-scalp-comfort.webp",
    alt: "Woman gently lifting hair at the roots before styling",
  },
  {
    title: "Helping reduce breakage",
    copy:
      "A smoother drying routine can mean less tugging, less overworking with brushes, and less repeated heat exposure. Muuhu AirPro helps hair look polished while keeping daily styling gentle and controlled.",
    image: "/images/products/muuhu-hair-dryer/hair-science/muuhu-breakage-care.webp",
    alt: "Front-facing model with smooth blonde blowout on a beige background",
  },
] as const;

function TechnologyImage({
  section,
  className = "",
}: {
  section: (typeof technologyStorySections)[number];
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-full overflow-hidden rounded-[18px] ${className} ${
        section.imageFrame === "wide"
          ? "max-w-[620px] md:max-w-[700px] lg:max-w-none lg:absolute lg:-bottom-2 lg:-right-2 lg:w-[48vw] lg:rounded-r-none lg:rounded-bl-none"
          : "max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:mr-auto lg:max-w-[430px]"
      }`}
    >
      <div
        className={`relative w-full ${
          section.imageFrame === "wide" ? "aspect-[1109/852]" : "aspect-[2/3]"
        }`}
      >
        <Image
          alt={section.alt}
          className={`object-contain ${
            section.imageFrame === "wide" ? "lg:object-contain lg:object-right-bottom" : ""
          }`}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 44vw, 92vw"
          src={section.image}
        />
      </div>
    </div>
  );
}

function HairDryerTechnologyStory() {
  return (
    <section className="bg-[#3b1846] text-[var(--cream)] overflow-hidden">
      {technologyStorySections.slice(0, 1).map((section, index) => (
        <article
          className={`pt-10 md:pt-14 lg:pt-16 ${
            index === 0
              ? "pb-10 md:pb-14 lg:pb-16 lg:relative lg:min-h-[37vw] lg:flex lg:items-center"
              : "pb-10 md:pb-14 lg:-mt-24 lg:pb-0 lg:-mb-[120px]"
          }`}
          key={section.title}
        >
          <div className="buudy-wrap grid items-center gap-8 lg:grid-cols-2 lg:gap-14 w-full">
            <TechnologyImage
              className={section.imageSide === "right" ? "lg:order-last" : ""}
              section={section}
            />
            <div
              className={`mx-auto max-w-xl text-center lg:text-left ${
                section.imageSide === "right" ? "lg:order-first" : ""
              }`}
            >
              <p className="buudy-mono text-[var(--gold)]">
                {section.eyebrow}
              </p>
              <h2 className="buudy-display mt-3 text-[2.4rem] leading-[1.05] text-[var(--cream)] md:text-5xl">
                {section.title}
              </h2>
              <p className="buudy-copy mt-5 text-sm leading-6 !text-[var(--cream)] md:text-base md:leading-7">
                {section.copy}
              </p>
            </div>
          </div>
        </article>
      ))}
      <MuuhuHairScienceSection />
    </section>
  );
}

function MuuhuHairScienceSection() {
  return (
    <div className="buudy-wrap pb-14 pt-4 md:pb-20 md:pt-2 lg:pb-24 lg:pt-0">
      <div className="border-t border-white/10 pt-10 md:pt-14">
        <div className="max-w-5xl">
          <h2 className="buudy-display text-[2.35rem] leading-tight text-[var(--cream)] md:text-5xl">
            Muuhu hair science
          </h2>
          <p className="buudy-copy mt-5 max-w-4xl text-sm leading-6 !text-[var(--cream)] md:text-base md:leading-7">
            Solving real styling problems with controlled airflow, intelligent heat care, and useful attachments designed to protect colour, moisture, shine, and smoothness.
          </p>
        </div>
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {hairScienceCards.map((card) => (
            <article
              className="overflow-hidden rounded-[22px] bg-[#4a2552] shadow-[0_22px_60px_rgba(0,0,0,0.22)]"
              key={card.title}
            >
              <div className="relative aspect-[4/3] bg-[var(--cream)]">
                <Image
                  alt={card.alt}
                  className="object-cover"
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 28vw, 92vw"
                  src={card.image}
                  unoptimized
                />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="buudy-display text-2xl leading-tight text-[var(--cream)]">
                  {card.title}
                </h3>
                <p className="buudy-copy mt-4 text-sm leading-6 !text-[var(--cream)] opacity-90">
                  {card.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
        <MuuhuCombGiftStrip />
      </div>
    </div>
  );
}

function MuuhuCombGiftStrip() {
  return (
    <div className="mt-10 rounded-[30px] border border-[#d8bd94]/70 bg-[var(--cream)] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-5 md:p-7 lg:p-8">
      <div className="grid items-center gap-6 md:grid-cols-[280px_1fr] lg:grid-cols-[300px_1fr_190px] lg:gap-10">
        <div className="relative overflow-hidden rounded-[26px]">
          <div className="absolute left-4 top-4 z-10 rounded-full bg-[var(--gold)] px-5 py-2 buudy-mono text-xs font-bold tracking-[0.18em] text-[var(--plum)] shadow-[0_10px_24px_rgba(59,30,64,0.18)]">
            FREE
          </div>
          <Image
            alt="Muuhu ScalpPro free bonus gift"
            className="h-full w-full object-cover"
            height={620}
            loading="lazy"
            sizes="(min-width: 1024px) 300px, (min-width: 768px) 280px, 92vw"
            src="/images/products/muuhu-hair-dryer/muuhu-comb-free-gift.webp"
            width={620}
          />
        </div>

        <div className="text-center md:text-left">
          <h3 className="buudy-display text-[2rem] leading-tight text-[var(--plum)] md:text-[2.4rem]">
            Muuhu ScalpPro included free
          </h3>
          <p className="buudy-copy mt-4 max-w-3xl text-base leading-7 text-[var(--plum)]/85 md:text-lg md:leading-8">
            A useful bonus for roots and scalp care: red-light combing,
            micro-massage, and serum support in one compact tool. It helps make
            the AirPro routine feel more complete, with extra care for
            fuller-looking, stronger-feeling hair.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            {[
              "Hair growth support",
              "Scalp massage",
              "Stronger-looking hair",
            ].map((item) => (
              <span
                className="rounded-full border border-[#dfcdb7] bg-[#fffaf3] px-4 py-2 text-sm font-semibold text-[var(--plum)]"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[26px] bg-[#4a2552] px-6 py-7 text-center text-[var(--cream)]">
          <p className="buudy-display text-4xl leading-none text-[var(--gold)]">
            FREE
          </p>
          <p className="mt-3 text-lg font-semibold">with AirPro</p>
          <p className="mt-1 text-sm text-[var(--cream)]/80">bundle gift</p>
        </div>
      </div>
    </div>
  );
}

const insideFeatures = [
  {
    id: "airflow-system",
    label: "Powerful airflow",
    title: "AirPro airflow system",
    copy:
      "The 110,000 RPM brushless motor drives fast, controlled airflow for quick drying, smoother styling, and a lighter everyday routine.",
    pointX: 40,
    pointY: 12,
    labelX: 19,
    labelY: 12,
    side: "left",
  },
  {
    id: "temperature-indicator",
    label: "Temperature indicator",
    title: "Clear heat indicator",
    copy:
      "Visible heat indicators make it easy to see your selected setting before you style, so you can move between careful drying and faster finishing with confidence.",
    pointX: 50,
    pointY: 43,
    labelX: 20,
    labelY: 43,
    side: "left",
  },
  {
    id: "temperature-button",
    label: "Temperature button",
    title: "3 temperature settings",
    copy:
      "Choose cool air, medium heat, or high heat depending on your hair type, section size, and how polished you want the final finish to look.",
    pointX: 50,
    pointY: 49,
    labelX: 20,
    labelY: 49,
    side: "left",
  },
  {
    id: "fan-speed-button",
    label: "Fan speed control",
    title: "3 speed settings",
    copy:
      "Choose low, medium, or high airflow for rough drying, root lift, smoothing, or slower detail work around the fringe and ends.",
    pointX: 50,
    pointY: 55,
    labelX: 20,
    labelY: 55,
    side: "left",
  },
  {
    id: "hot-cool-wind",
    label: "Hot and cool air",
    title: "Hot and cool styling control",
    copy:
      "Use warmer airflow to shape and smooth, then finish with cooler air to help set the style and keep hair feeling more comfortable.",
    pointX: 50,
    pointY: 62,
    labelX: 82,
    labelY: 62,
    side: "right",
  },
  {
    id: "safe-lock",
    label: "Attachment lock",
    title: "Secure attachment lock",
    copy:
      "The lock system helps each styling head sit securely in place, making attachment changes feel quick, stable, and easy during your routine.",
    pointX: 53,
    pointY: 29,
    labelX: 83,
    labelY: 29,
    side: "right",
  },
  {
    id: "air-inlet",
    label: "Filtered air inlet",
    title: "Filtered air inlet",
    copy:
      "The lower air inlet supports steady airflow through the body while helping protect the motor area during daily styling.",
    pointX: 50,
    pointY: 86,
    labelX: 84,
    labelY: 86,
    side: "right",
  },
] as const;

function MuuhuInsideSection() {
  const [activeFeatureId, setActiveFeatureId] = useState<(typeof insideFeatures)[number]["id"]>(
    insideFeatures[0].id,
  );
  const activeFeature =
    insideFeatures.find((feature) => feature.id === activeFeatureId) ?? insideFeatures[0];
  const activeIndex = insideFeatures.findIndex((feature) => feature.id === activeFeature.id);
  const nextFeature = insideFeatures[(activeIndex + 1) % insideFeatures.length];

  return (
    <section className="buudy-section bg-[var(--cream)] py-16 text-[var(--plum)] md:py-24">
      <div className="buudy-wrap lg:hidden">
        <div className="mx-auto max-w-[430px] text-center">
          <p className="buudy-mono text-[var(--gold)]">What&apos;s inside</p>
          <h2 className="buudy-display mt-3 text-[2.7rem] leading-[1.02] text-[var(--plum)]">
            Muuhu AirPro engineering.
          </h2>
          <p className="buudy-copy mt-5 !text-[var(--plum)]">
            Explore the airflow, heat, and attachment controls built into the Muuhu AirPro 7-in-1 hair dryer.
          </p>
        </div>

        <div className="relative mx-auto mt-8 h-[min(620px,160vw)] w-full max-w-[760px] overflow-visible sm:!h-[720px]">
          <Image
            alt="Muuhu AirPro hair dryer control body"
            className="absolute left-1/2 top-1/2 h-[min(560px,145vw)] w-auto -translate-x-1/2 -translate-y-1/2 object-contain sm:!h-[680px]"
            height={1787}
            loading="lazy"
            sizes="(min-width: 640px) 48vw, 62vw"
            src="/images/products/muuhu-hair-dryer/muuhu-airpro-engineering-controls.png"
            width={766}
          />

          {insideFeatures.map((feature) => {
            const isActive = feature.id === activeFeature.id;
            const connectorLeft =
              feature.side === "left" ? feature.labelX + 11 : feature.pointX + 2.5;
            const connectorWidth =
              feature.side === "left"
                ? Math.max(4, feature.pointX - feature.labelX - 13)
                : Math.max(4, feature.labelX - feature.pointX - 13.5);

            return (
              <div className="pointer-events-none absolute inset-0" key={feature.id}>
                <span
                  aria-hidden="true"
                  className={`absolute h-px origin-left ${
                    isActive ? "bg-[var(--plum)]" : "bg-[var(--gold)]/45"
                  }`}
                  style={{
                    left: `${connectorLeft}%`,
                    top: `${feature.pointY}%`,
                    width: `${connectorWidth}%`,
                  }}
                />
                <button
                  aria-label={feature.label}
                  aria-pressed={isActive}
                  className={`pointer-events-auto absolute grid size-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border text-base font-semibold leading-none shadow-md transition sm:size-9 sm:text-lg ${
                    isActive
                      ? "border-[var(--plum)] bg-[var(--plum)] text-[var(--cream)] ring-4 ring-[var(--gold)]/25"
                      : "border-[var(--gold)]/50 bg-white text-[var(--plum)] hover:border-[var(--plum)] hover:bg-[var(--plum)] hover:text-[var(--cream)]"
                  }`}
                  onClick={() => setActiveFeatureId(feature.id)}
                  style={{ left: `${feature.pointX}%`, top: `${feature.pointY}%` }}
                  type="button"
                >
                  <span aria-hidden="true">+</span>
                </button>
                <button
                  className={`pointer-events-auto absolute min-w-[104px] -translate-x-1/2 -translate-y-1/2 rounded-full border px-2 py-1.5 text-center text-[10px] font-semibold leading-tight shadow-lg transition sm:min-w-[150px] sm:px-4 sm:py-2 sm:text-xs ${
                    isActive
                      ? "border-[var(--plum)] bg-[var(--plum)] text-[var(--cream)]"
                      : "border-[var(--border)] bg-white/90 text-[var(--plum)] hover:border-[var(--plum)] hover:bg-[var(--plum)] hover:text-[var(--cream)]"
                  }`}
                  onClick={() => setActiveFeatureId(feature.id)}
                  style={{ left: `${feature.labelX}%`, top: `${feature.labelY}%` }}
                  type="button"
                >
                  {feature.label}
                </button>
              </div>
            );
          })}
        </div>

        <div
          className="mx-auto mt-6 max-w-[430px] rounded-[18px] border border-[var(--gold)]/35 bg-[var(--plum)] p-6 text-left text-[var(--cream)] shadow-2xl shadow-[rgba(59,30,64,0.18)]"
          aria-live="polite"
        >
          <p className="buudy-mono text-[var(--gold)]">
            Feature {activeIndex + 1} of {insideFeatures.length}
          </p>
          <h3 className="buudy-display mt-3 text-2xl leading-tight text-[var(--cream)]">
            {activeFeature.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[var(--cream)]/88">
            {activeFeature.copy}
          </p>
          <button
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/35 px-5 py-3 text-sm font-semibold text-[var(--cream)] transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--plum)]"
            onClick={() => setActiveFeatureId(nextFeature.id)}
            type="button"
          >
            Next feature
            <span aria-hidden="true">+</span>
          </button>
        </div>
      </div>

      <div className="buudy-wrap hidden items-start gap-10 lg:grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div className="order-2 mx-auto w-full max-w-[430px] text-center lg:order-1 lg:text-left">
          <p className="buudy-mono text-[var(--gold)]">What&apos;s inside</p>
          <h2 className="buudy-display mt-3 text-[2.7rem] leading-[1.02] text-[var(--plum)] md:text-6xl">
            Muuhu AirPro engineering.
          </h2>
          <p className="buudy-copy mt-5 !text-[var(--plum)]">
            Explore the airflow, heat, and attachment controls built into the Muuhu AirPro 7-in-1 hair dryer.
          </p>

          <div
            className="mt-8 rounded-[18px] border border-[var(--gold)]/35 bg-[var(--plum)] p-6 text-left text-[var(--cream)] shadow-2xl shadow-[rgba(59,30,64,0.18)]"
            aria-live="polite"
          >
            <p className="buudy-mono text-[var(--gold)]">
              Feature {activeIndex + 1} of {insideFeatures.length}
            </p>
            <h3 className="buudy-display mt-3 text-2xl leading-tight text-[var(--cream)]">
              {activeFeature.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--cream)]/88">
              {activeFeature.copy}
            </p>
            <button
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/35 px-5 py-3 text-sm font-semibold text-[var(--cream)] transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--plum)]"
              onClick={() => setActiveFeatureId(nextFeature.id)}
              type="button"
            >
              Next feature
              <span aria-hidden="true">+</span>
            </button>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-1 lg:hidden">
            {insideFeatures.map((feature) => {
              const isActive = feature.id === activeFeature.id;

              return (
                <button
                  className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold ${
                    isActive
                      ? "border-[var(--plum)] bg-[var(--plum)] text-[var(--cream)]"
                      : "border-[var(--border)] bg-white text-[var(--plum)]"
                  }`}
                  key={feature.id}
                  onClick={() => setActiveFeatureId(feature.id)}
                  type="button"
                >
                  {feature.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[760px] lg:order-2">
          <div className="relative h-[min(600px,156vw)] overflow-hidden rounded-[26px] bg-[var(--cream)] sm:h-[660px] md:h-[720px] lg:h-auto lg:min-h-[820px]">
            <Image
              alt="Muuhu AirPro hair dryer control body"
              className="absolute left-1/2 top-1/2 h-[min(560px,145vw)] w-auto -translate-x-1/2 -translate-y-1/2 object-contain sm:h-[620px] md:h-[680px] lg:!h-[790px]"
              height={1787}
              loading="lazy"
              sizes="(min-width: 1024px) 32vw, 70vw"
              src="/images/products/muuhu-hair-dryer/muuhu-airpro-engineering-controls.png"
              width={766}
            />

            {insideFeatures.map((feature) => {
              const isActive = feature.id === activeFeature.id;
              const connectorLeft =
                feature.side === "left" ? feature.labelX + 11 : feature.pointX + 2.5;
              const connectorWidth =
                feature.side === "left"
                  ? Math.max(4, feature.pointX - feature.labelX - 13)
                  : Math.max(4, feature.labelX - feature.pointX - 13.5);

              return (
                <div className="pointer-events-none absolute inset-0 hidden lg:block" key={feature.id}>
                  <span
                    aria-hidden="true"
                    className={`absolute h-px origin-left ${
                      isActive ? "bg-[var(--plum)]" : "bg-[var(--gold)]/45"
                    }`}
                    style={{
                      left: `${connectorLeft}%`,
                      top: `${feature.pointY}%`,
                      width: `${connectorWidth}%`,
                    }}
                  />
                  <button
                    aria-label={feature.label}
                    aria-pressed={isActive}
                    className={`pointer-events-auto absolute grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border text-lg font-semibold leading-none shadow-md transition ${
                      isActive
                        ? "border-[var(--plum)] bg-[var(--plum)] text-[var(--cream)] ring-4 ring-[var(--gold)]/25"
                        : "border-[var(--gold)]/50 bg-white text-[var(--plum)] hover:border-[var(--plum)] hover:bg-[var(--plum)] hover:text-[var(--cream)]"
                    }`}
                    onClick={() => setActiveFeatureId(feature.id)}
                    style={{ left: `${feature.pointX}%`, top: `${feature.pointY}%` }}
                    type="button"
                  >
                    <span aria-hidden="true">+</span>
                  </button>
                  <button
                    className={`pointer-events-auto absolute min-w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border px-4 py-2 text-xs font-semibold shadow-lg transition ${
                      isActive
                        ? "border-[var(--plum)] bg-[var(--plum)] text-[var(--cream)]"
                        : "border-[var(--border)] bg-white/90 text-[var(--plum)] hover:border-[var(--plum)] hover:bg-[var(--plum)] hover:text-[var(--cream)]"
                    }`}
                    onClick={() => setActiveFeatureId(feature.id)}
                    style={{ left: `${feature.labelX}%`, top: `${feature.labelY}%` }}
                    type="button"
                  >
                    {feature.label}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HairDryerBeforeAfterSection() {
  const attachments = [
    { num: 1, title: "L-Shape Base", desc: "Fast pre-drying from wet to styled-ready." },
    { num: 2, title: "Smoothing Brush", desc: "Smooths, straightens and tames frizz." },
    { num: 3, title: "Round Volumising Brush", desc: "Adds volume, lift and bounce." },
    { num: 4, title: "Left Curling Barrel (30mm)", desc: "Creates curls that wrap to the left." },
    { num: 5, title: "Right Curling Barrel (30mm)", desc: "Creates curls that wrap to the right." },
    { num: 6, title: "Diffuser", desc: "Enhances natural curls and reduces frizz." },
    { num: 7, title: "Concentrator Nozzle", desc: "Smooth, precise drying for a sleek finish." },
  ];

  return (
    <section className="buudy-section bg-[var(--cream)] py-16 md:py-24">
      <div className="buudy-wrap flex flex-col items-center text-center">
        <SectionHeading
          eyebrow="Real Results"
          title={
            <>
              Transform your hair <em className="buudy-italic">instantly</em>.
            </>
          }
          copy="See the difference each attachment makes — from wet to wow in just one session."
        />
        <div className="mt-12 w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {attachments.map((att) => (
            <div key={att.num} className="flex flex-col items-center text-center">
              <h3 className="buudy-mono text-[var(--gold)] text-xs uppercase tracking-widest mb-0.5">
                {att.num}. {att.title}
              </h3>
              <p className="text-xs text-[var(--plum)] opacity-70 mb-3 max-w-[200px]">
                {att.desc}
              </p>
              <div className="flex gap-1 w-full">
                {/* Before */}
                <div className="flex-1 relative">
                  <span className="absolute top-2 left-2 z-10 buudy-mono text-[10px] uppercase tracking-widest bg-[var(--cream)] text-[var(--gold)] px-2 py-0.5 rounded-full border border-[var(--gold)]/30">
                    Before
                  </span>
                  <div className="aspect-[3/4] relative rounded-xl overflow-hidden bg-[var(--plum)]/5">
                    <Image
                      src={`/images/products/muuhu-hair-dryer/before-after/ba_before.jpg`}
                      alt={`Before using ${att.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 15vw"
                    />
                  </div>
                </div>
                {/* After */}
                <div className="flex-1 relative">
                  <span className="absolute top-2 right-2 z-10 buudy-mono text-[10px] uppercase tracking-widest bg-[var(--gold)] text-white px-2 py-0.5 rounded-full">
                    After
                  </span>
                  <div className="aspect-[3/4] relative rounded-xl overflow-hidden bg-[var(--plum)]/5">
                    <Image
                      src={`/images/products/muuhu-hair-dryer/before-after/ba_after_${att.title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/_+$/, '')}.jpg`}
                      alt={`After using ${att.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 15vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HairDryerDescriptionBanners() {
  return (
    <section className="bg-[var(--plum)] w-full py-16 md:py-24">
      <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-8 md:gap-12 px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-4">
           <SectionHeading
            eyebrow="The Ultimate Multi-Styler"
            title={
              <>
                Everything you need to <em className="buudy-italic">style</em>.
              </>
            }
            copy="From smooth blowouts to bouncy curls, discover all the ways you can use the Muuhu AirPro."
            invert
          />
        </div>
        {[
          { src: "/images/products/muuhu-hair-dryer/04-hairluxe.jpg", alt: "Once you try the hairluxe, there is no turning back" },
          { src: "/images/products/muuhu-hair-dryer/05-coanda-effect.jpg", alt: "Coanda effect in action" },
          { src: "/images/products/muuhu-hair-dryer/06-holiday-gift.jpg", alt: "Holiday gift packaging" },
          { src: "/images/products/muuhu-hair-dryer/07-prep-hair.jpg", alt: "Prep hair before styling" },
          { src: "/images/products/muuhu-hair-dryer/08-curling-wand.jpg", alt: "Curling wand attachment" },
        ].map((banner, index) => (
          <div key={index} className="w-full overflow-hidden rounded-[25px] shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={banner.src}
              alt={banner.alt}
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export function HairDryerProductPage({ product }: { product: Product }) {
  return (
    <>
      <ProductHero product={product} />
      <VideoReviews />
      <TrustBadges />
      <HairDryerHeroVideo />
      <HairDryerAttachmentBadges />
      {/* <FeatureGrid 
        eyebrow="Why Muuhu"
        title={
          <>
            What makes our styler <em className="buudy-italic text-[var(--gold)]">unique</em>?
          </>
        }
      /> */}

      <BeforeAfterGrid />
      <HairDryerTechnologyStory />
      {/* <HairDryerDescriptionBanners /> */}

      {/* <MuuhuProductFocus /> */}
      <MuuhuAppPromo />
      <MuuhuHairTypeSection />
      <ProductReviewsSection productHandle={product.id} />
      <MuuhuInsideSection />
      <ComparisonTable />
      <FAQSection faqs={product.faqs} productHandle={product.id} />
      <GuaranteeSection productHandle={product.id} />
      <StickyAddToCart product={product} />
    </>
  );
}
