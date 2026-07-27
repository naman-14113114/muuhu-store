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
    eyebrow: "Airpro airflow system",
    title: "Powerful, fast, and controlled.",
    copy:
      "A 110,000 RPM brushless motor drives high-speed airflow through the Muuhu Airpro body for fast drying and precise styling. The result is a lighter daily routine with smoother control from roots to ends.",
    image: "/images/products/muuhu-hair-dryer/muuhu-airpro-airflow-system-v3.webp",
    alt: "Muuhu Airpro high-speed airflow technology",
    imageSide: "right",
    imageFrame: "wide",
  },
  {
    eyebrow: "Intelligent heat control",
    title: "Protects shine while you style.",
    copy:
      "Muuhu Airpro is designed to dry quickly without relying on harsh, uncontrolled heat. The intelligent heat system keeps airflow consistent, helping protect natural shine while smoothing frizz and flyaways.",
    image: "/images/products/muuhu-hair-dryer/muuhu-airpro-heat-control-detail-transparent-v2.png",
    alt: "Muuhu Airpro intelligent heat control internal technology",
    imageSide: "left",
    imageFrame: "portrait",
  },
] as const;

function TechnologyImage({
  section,
}: {
  section: (typeof technologyStorySections)[number];
}) {
  return (
    <div
      className={`relative mx-auto w-full overflow-hidden rounded-[18px] ${
        section.imageFrame === "wide"
          ? "max-w-[720px] lg:max-w-none lg:absolute lg:-bottom-2 lg:-right-2 lg:w-[48vw] lg:rounded-r-none lg:rounded-bl-none"
          : "max-w-[430px] lg:mr-auto"
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
      {technologyStorySections.map((section, index) => (
        <article
          className={`pt-10 md:pt-14 lg:pt-16 ${
            index === 0 ? "pb-10 md:pb-14 lg:pb-16 lg:relative lg:min-h-[37vw] lg:flex lg:items-center" : "lg:-mt-24 -mb-24 lg:-mb-[120px]"
          }`}
          key={section.title}
        >
          <div className="buudy-wrap grid items-center gap-8 lg:grid-cols-2 lg:gap-14 w-full">
            {section.imageSide === "left" ? (
              <TechnologyImage section={section} />
            ) : null}
            <div className="mx-auto max-w-xl text-center lg:text-left">
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
            {section.imageSide === "right" ? (
              <TechnologyImage section={section} />
            ) : null}
          </div>
        </article>
      ))}
    </section>
  );
}

const insideFeatures = [
  {
    id: "airflow-system",
    label: "Powerful airflow",
    title: "Airpro airflow system",
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
    title: "Controlled airflow speed",
    copy:
      "Switch airflow speed for rough drying, root lift, smoothing, or slower detail work around the fringe and ends.",
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
      <div className="buudy-wrap grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div className="mx-auto w-full max-w-[430px] text-center lg:text-left">
          <p className="buudy-mono text-[var(--gold)]">What&apos;s inside</p>
          <h2 className="buudy-display mt-3 text-[2.7rem] leading-[1.02] text-[var(--plum)] md:text-6xl">
            Muuhu Airpro engineering.
          </h2>
          <p className="buudy-copy mt-5 !text-[var(--plum)]">
            Explore the airflow, heat, and attachment controls built into the Muuhu Airpro 7-in-1 hair dryer.
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

        <div className="relative mx-auto w-full max-w-[760px]">
          <div className="relative min-h-[760px] overflow-hidden rounded-[26px] bg-[var(--cream)] lg:min-h-[820px]">
            <Image
              alt="Muuhu Airpro hair dryer control body"
              className="absolute left-1/2 top-1/2 object-contain"
              height={1787}
              loading="lazy"
              sizes="(min-width: 1024px) 32vw, 70vw"
              src="/images/products/muuhu-hair-dryer/muuhu-airpro-whats-inside.png"
              style={{ height: "min(790px, 178vw)", transform: "translate(-50%, -50%)", width: "auto" }}
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
            copy="From smooth blowouts to bouncy curls, discover all the ways you can use the Muuhu Airpro."
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
