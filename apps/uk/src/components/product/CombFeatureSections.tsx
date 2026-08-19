"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

const defaultSteps = [
  {
    step: "Step 1",
    title: "Prepare Your Scalp",
    desc: "Ensure your hair and scalp are dry and free from styling products.",
    image: "/images/products/muuhu-comb/Step-1.webp",
  },
  {
    step: "Step 2",
    title: "Power On",
    desc: "Press the button to turn it on — vibration starts automatically.",
    image: "/images/products/muuhu-comb/Step-2.webp",
  },
  {
    step: "Step 3",
    title: "Select Mode",
    desc: "Pick the LED mode based on your hair goals",
    image: "/images/products/muuhu-comb/Step-3.webp",
  },
  {
    step: "Step 4",
    title: "Start Brushing",
    desc: "Glide the brush slowly over the area, focusing on thinning spots.",
    image: "/images/products/muuhu-comb/Step-4.webp",
  },
  {
    step: "Step 5",
    title: "Switch Lights",
    desc: "Use each mode 1-2 minutes. You can switch colors anytime.",
    image: "/images/products/muuhu-comb/Step-5.webp",
  },
  {
    step: "Step 6",
    title: "Make It a Ritual",
    desc: "Use at least 3-4 times weekly for 3-10 minutes.",
    image: "/images/products/muuhu-comb/Step-6.webp",
  }
];

const scalpProSteps = [
  {
    step: "Step 1",
    title: "Fill 8ml Tank",
    desc: "Use the precision dropper to fill the detachable liquid tank with your favourite serum or hair oil.",
    image: "/images/products/muuhu-scalppro/Step-1.webp",
  },
  {
    step: "Step 2",
    title: "Power On (Red Light)",
    desc: "Press the center power button to activate 650nm Red LED therapy for follicle root revitalization.",
    image: "/images/products/muuhu-scalppro/Step-2.webp",
  },
  {
    step: "Step 3",
    title: "Select Light Mode",
    desc: "Cycle between Red (650nm), Blue (430nm), and Purple (380nm) modes for customized phototherapy care.",
    image: "/images/products/muuhu-scalppro/Step-3.webp",
  },
  {
    step: "Step 4",
    title: "Glide Along Scalp",
    desc: "Glide gently through parted hair. 6 elastic rolling beads deliver serum directly to roots with zero grease.",
    image: "/images/products/muuhu-scalppro/Step-4.webp",
  },
  {
    step: "Step 5",
    title: "EMS & Vibration",
    desc: "Enjoy 3 EMS microcurrent levels and 10,000 VPM acoustic vibration for deep tension relief.",
    image: "/images/products/muuhu-scalppro/Step-5.webp",
  },
  {
    step: "Step 6",
    title: "Rinse & Stand Up",
    desc: "Detach and rinse the 8ml tank under tap water. Rest the comb upright on its flat bottom base.",
    image: "/images/products/muuhu-scalppro/Step-6.webp",
  }
];

export function CombFeatureSections({ productHandle }: { productHandle?: string }) {
  const isScalpPro = productHandle === "muuhu-scalppro";
  const steps = isScalpPro ? scalpProSteps : defaultSteps;
  const beforeAfterImg = isScalpPro ? "/images/products/muuhu-scalppro/muuhu_scalppro_lifestyle.webp" : "/images/products/muuhu-comb/muuhu-comb-before-after-2.webp";
  const ritualImg = isScalpPro ? "/images/products/muuhu-scalppro/muuhu_scalppro_lights.webp" : "/images/products/muuhu-comb/muuhu_24.webp";
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <>
      <section className="buudy-section bg-[var(--cream)] py-14 md:py-24">
        <div className="buudy-wrap">
          <h2 className="buudy-display text-center text-[3rem] leading-tight text-[var(--plum)] md:text-6xl mb-12 md:mb-16">
            How To <em className="buudy-italic text-[var(--gold)]">Use</em>
          </h2>
          
          <div className="relative">
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="md:hidden absolute left-0 top-[35%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/80 transition-colors shadow-lg"
                aria-label="Scroll left"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
            )}

            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="md:hidden absolute right-0 top-[35%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/80 transition-colors shadow-lg"
                aria-label="Scroll right"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            )}

            <div 
              ref={scrollRef}
              className="flex md:grid md:grid-cols-3 gap-5 md:gap-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {steps.map((s, i) => (
                <div key={i} className="flex flex-col gap-4 md:gap-6 group flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-auto snap-center md:snap-none">
                  <div className="relative w-full overflow-hidden rounded-[18px] bg-[var(--cream)] md:bg-[var(--blush)] md:aspect-[4/3]">
                    <Image
                      src={s.image}
                      alt={s.title}
                      width={800}
                      height={800}
                      className="w-full h-auto md:h-full md:object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 85vw"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[var(--plum)] mb-2">{s.title}</h3>
                    <p className="text-[var(--muted)] leading-relaxed text-sm md:text-base whitespace-normal">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="buudy-section bg-[var(--cream)] py-14 md:py-24">
        <div className="buudy-wrap grid items-center gap-8 md:gap-14 lg:grid-cols-2">
          <div className="lg:order-last relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-[18px]">
            <Image
              alt="Before and After Results"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={beforeAfterImg}
            />
          </div>
          <div className="lg:order-first">
            <h2 className="buudy-display text-[3rem] leading-[1.1] text-[var(--plum)] md:text-6xl mb-12">
              Why People<br/>Love It
            </h2>
            <div className="flex flex-col gap-10">
              <div className="flex items-start gap-6">
                <span className="buudy-display text-5xl md:text-[4rem] text-[var(--gold)] flex-none">92%</span>
                <p className="pt-2 text-base leading-6 text-[var(--plum)] font-medium max-w-[280px]">
                  reported less daily shedding after the first sessions*
                </p>
              </div>
              <div className="flex items-start gap-6">
                <span className="buudy-display text-5xl md:text-[4rem] text-[var(--gold)] flex-none">90%</span>
                <p className="pt-2 text-base leading-6 text-[var(--plum)] font-medium max-w-[280px]">
                  noticed thicker, glossier, fuller-looking hair within the first month*
                </p>
              </div>
              <div className="flex items-start gap-6">
                <span className="buudy-display text-5xl md:text-[4rem] text-[var(--gold)] flex-none">94%</span>
                <p className="pt-2 text-base leading-6 text-[var(--plum)] font-medium max-w-[280px]">
                  saw new baby hairs or visible regrowth in thinning areas*
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="buudy-section bg-[var(--cream)] py-14 md:py-24">
        <div className="buudy-wrap grid items-center gap-8 md:gap-14 lg:grid-cols-2">
          <div className="w-full overflow-hidden rounded-[18px] bg-[var(--blush)]">
            <Image
              alt={isScalpPro ? "Tri-Action Scalp & Follicle Rejuvenation" : "Relaxing Micro-Vibrations"}
              className="w-full h-auto block object-cover"
              width={1000}
              height={1000}
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={isScalpPro ? "/images/products/muuhu-scalppro/muuhu_scalppro_lights.webp" : "/images/products/muuhu-comb/muuhu_24.webp"}
            />
          </div>
          <div>
            <p className="buudy-mono text-[var(--gold)]">
              {isScalpPro ? "Daily Scalp Ritual" : "Daily Ritual"}
            </p>
            <h2 className="buudy-display mt-3 text-[2.5rem] leading-tight text-[var(--plum)] md:text-5xl">
              {isScalpPro ? (
                <>
                  Tri-Color <em className="buudy-italic">Phototherapy & EMS</em>.
                </>
              ) : (
                <>
                  Relaxing <em className="buudy-italic">Micro-Vibrations</em>.
                </>
              )}
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-[var(--muted)]">
              {isScalpPro
                ? "Transform your daily hair routine with targeted 650nm Red, 430nm Blue, and Purple light therapy. 3 adjustable EMS microcurrent levels and 10,000 VPM acoustic vibration deeply stimulate scalp follicles while 6 elastic rolling beads deliver nourishing serums directly to roots without any greasy mess."
                : "Transform your hair care routine into a spa-like experience. Thousands of micro-vibrations per minute boost blood circulation, relax tense scalp muscles, and dramatically improve the absorption of your treatments."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
