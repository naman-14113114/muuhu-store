"use client";

import Image from "next/image";
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
    image: "/images/products/muuhu-hair-dryer/muuhu-airpro-heat-control.png",
    alt: "Muuhu Airpro high-speed airflow technology",
    imageSide: "right",
    imageFrame: "wide",
  },
  {
    eyebrow: "Intelligent heat control",
    title: "Protects shine while you style.",
    copy:
      "Muuhu Airpro is designed to dry quickly without relying on harsh, uncontrolled heat. The intelligent heat system keeps airflow consistent, helping protect natural shine while smoothing frizz and flyaways.",
    image: "/images/products/muuhu-hair-dryer/muuhu-airpro-heat-control-detail.png",
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
          ? "max-w-[720px] lg:ml-auto"
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
          className="object-contain"
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
    <section className="bg-[#3b1e40] text-[var(--cream)]">
      {technologyStorySections.map((section, index) => (
        <article
          className={`py-10 md:py-14 lg:py-16 ${
            index === 0 ? "border-b border-[rgba(247,241,232,.16)]" : ""
          }`}
          key={section.title}
        >
          <div className="buudy-wrap grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
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
              <p className="buudy-copy mt-5 text-sm leading-6 text-[rgba(247,241,232,.96)] md:text-base md:leading-7">
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

      <MuuhuProductFocus />
      <MuuhuAppPromo />
      <MuuhuHairTypeSection />
      <ProductReviewsSection productHandle={product.id} />
      <ComparisonTable />
      <FAQSection faqs={product.faqs} productHandle={product.id} />
      <GuaranteeSection productHandle={product.id} />
      <StickyAddToCart product={product} />
    </>
  );
}
