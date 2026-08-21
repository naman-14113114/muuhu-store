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
import { DeferredAutoplayVideo } from "@/components/ui/DeferredAutoplayVideo";
import { VideoReviews } from "./VideoReviews";
import { BeforeAfterGrid } from "./BeforeAfterGrid";
import { MuuhuAppPromo, MuuhuHairTypeSection } from "./MuuhuFeatureSections";
import { MuuhuInsideSection } from "./MuuhuInsideSection";

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
          <DeferredAutoplayVideo
            className="h-full w-full object-cover"
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
      "A 1,600W, 110,000 RPM brushless motor drives high-speed airflow through the Muuhu AirPro body for fast drying and precise styling. Three temperature settings and three speed settings give smoother control from roots to ends.",
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
    image: "/images/products/muuhu-hair-dryer/hair-science/muuhu-enhancing-shine.webp",
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
    image: "/images/products/muuhu-hair-dryer/hair-science/muuhu-hair-breakage-reduction.webp",
    alt: "Model with healthy, smooth blonde styled hair",
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
          loading="eager"
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
      {/* {technologyStorySections.slice(0, 1).map((section, index) => (
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
      ))} */}
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
                  loading="eager"
                  sizes="(min-width: 768px) 28vw, 92vw"
                  src={card.image}
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
            loading="eager"
            sizes="(min-width: 1024px) 300px, (min-width: 768px) 280px, 92vw"
            src="/images/products/muuhu-scalppro/muuhu_scalppro_hero_set.webp"
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
          <p className="buudy-display text-4xl leading-none text-[var(--gold-on-dark)]">
            FREE
          </p>
          <p className="mt-3 text-lg font-semibold">with AirPro</p>
          <p className="mt-1 text-sm text-[var(--cream)]/80">bundle gift</p>
        </div>
      </div>
    </div>
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
              loading="eager"
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
      <div className="muuhu-airpro-deferred-content">
        <TrustBadges className="pt-6 pb-4 md:pt-10 md:pb-8" />
        <VideoReviews />
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
        <MuuhuInsideSection />
        <HairDryerTechnologyStory />
        {/* <HairDryerDescriptionBanners /> */}

        {/* <MuuhuProductFocus /> */}
        <MuuhuAppPromo />
        <MuuhuHairTypeSection />
        <ProductReviewsSection productHandle={product.id} />
        <HairDryerHeroVideo />

        <ComparisonTable />
        <FAQSection faqs={product.faqs} productHandle={product.id} />
        <GuaranteeSection productHandle={product.id} />
      </div>
      <StickyAddToCart product={product} />
    </>
  );
}
