"use client";

import Image from "next/image";

export function CombFeatureSections() {
  return (
    <>
      <section className="buudy-section bg-[var(--cream)] md: md: py-14 md:py-24">
        <div className="buudy-wrap grid items-center gap-8 md:gap-14 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[var(--blush)]">
            <Image
              alt="Red Light Follicle Stimulation"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/images/products/muuhu-comb/muuhu-red-light-therapy-benefits.png"
            />
          </div>
          <div>
            <p className="buudy-mono text-[var(--gold)]">Targeted Therapy</p>
            <h2 className="buudy-display mt-3 text-[2.5rem] leading-tight text-[var(--plum)] md:text-5xl">
              650nm Red Light <em className="buudy-italic">Stimulation</em>.
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-[var(--muted)]">
              The Muuhu Comb doesn&apos;t just massage—it actively stimulates the roots. By delivering medical-grade 650nm red light therapy directly to the scalp, it encourages cellular energy production and fights thinning hair right at the follicle level.
            </p>
          </div>
        </div>
      </section>

      <section className="buudy-section bg-[var(--cream)] md: md: py-14 md:py-24">
        <div className="buudy-wrap grid items-center gap-8 md:gap-14 lg:grid-cols-2">
          <div className="lg:order-last relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-[18px]">
            <Image
              alt="Before and After Results"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/images/products/muuhu-comb/muuhu-comb-before-after-2.png"
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

      <section className="buudy-section bg-[var(--cream)] md: md: py-14 md:py-24">
        <div className="buudy-wrap grid items-center gap-8 md:gap-14 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[var(--blush)]">
            <Image
              alt="Relaxing Micro-Vibrations"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/images/products/muuhu-comb/muuhu-therapy-comb-lifestyle.png"
            />
          </div>
          <div>
            <p className="buudy-mono text-[var(--gold)]">Daily Ritual</p>
            <h2 className="buudy-display mt-3 text-[2.5rem] leading-tight text-[var(--plum)] md:text-5xl">
              Relaxing <em className="buudy-italic">Micro-Vibrations</em>.
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-[var(--muted)]">
              Transform your hair care routine into a spa-like experience. Thousands of micro-vibrations per minute boost blood circulation, relax tense scalp muscles, and dramatically improve the absorption of your treatments.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
