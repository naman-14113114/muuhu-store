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
              The Muuhu Comb doesn't just massage—it actively stimulates the roots. By delivering medical-grade 650nm red light therapy directly to the scalp, it encourages cellular energy production and fights thinning hair right at the follicle level.
            </p>
          </div>
        </div>
      </section>

      <section className="buudy-section bg-[var(--cream)] md: md: py-14 md:py-24">
        <div className="buudy-wrap grid items-center gap-8 md:gap-14 lg:grid-cols-2">
          <div className="lg:order-last relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[var(--blush)]">
            <Image
              alt="Essential Oil Infusion"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/images/products/muuhu-comb/muuhu-scalp-care-routine.png"
            />
          </div>
          <div className="lg:order-first">
            <p className="buudy-mono text-[var(--gold)]">Deep Nourishment</p>
            <h2 className="buudy-display mt-3 text-[2.5rem] leading-tight text-[var(--plum)] md:text-5xl">
              Zero-Mess <em className="buudy-italic">Application</em>.
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-[var(--muted)]">
              Stop wasting expensive hair serums. Our integrated 6ml liquid tank features specialized rolling ball teeth that distribute minoxidil or essential oils evenly across your scalp. Maximum root absorption, zero greasy hair.
            </p>
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
