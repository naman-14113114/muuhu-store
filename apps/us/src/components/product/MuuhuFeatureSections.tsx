"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Smartphone } from "lucide-react";
import { productAsset } from "@/lib/media";

export function MuuhuProductFocus() {
  return (
    <section className="buudy-section bg-[var(--cream)] md: md: py-14 md:py-24">
      <div className="buudy-wrap grid items-center gap-8 md:gap-14 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-[18px] bg-[var(--blush)]">
          <Image
            alt="Style without compromise"
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={productAsset("muuhu-product-focus.webp")}
          />
        </div>
        <div>
          <p className="buudy-mono text-[var(--gold)]">Advanced Technology</p>
          <h2 className="buudy-display mt-3 text-[2.5rem] leading-tight text-[var(--plum)] md:text-5xl">
            Style without <em className="buudy-italic">compromise</em>.
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-[var(--muted)]">
            Our 110,000 RPM brushless motor combined with the Coanda effect allows you to wrap, curl, and style your hair effortlessly. Achieve salon-quality results at home with zero extreme heat damage.
          </p>
        </div>
      </div>
    </section>
  );
}

export function MuuhuAppPromo() {
  return (
    <section className="buudy-section bg-[var(--cream)] md: md: py-14 md:py-24" id="muuhu-app">
      <div className="buudy-wrap grid items-center gap-8 md:gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="relative aspect-[1200/799] w-full overflow-hidden rounded-[18px] bg-[var(--blush)] lg:order-last">
          <Image
            alt="Muuhu Companion App"
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            src={productAsset("muuhu-app-promo.webp")}
          />
          <span className="buudy-mono absolute left-5 top-5 rounded-full bg-[rgba(247,241,232,.9)] px-4 py-2 text-[var(--plum)] backdrop-blur">
            Free with Muuhu
          </span>
        </div>
        <div>
          <p className="buudy-eyebrow">Companion App</p>
          <h2 className="buudy-display mt-2 text-[2.5rem] leading-tight text-[var(--plum)] md:text-5xl">
            Muuhu <span className="text-[var(--gold)]">Style App</span>.
          </h2>
          <p className="buudy-copy mt-3 text-sm leading-6">
            The Muuhu Style App is the ultimate companion for your hair dryer. It helps you unlock the full potential of all 7 attachments with guided tutorials, customized heat settings, and personalized routines tailored to your hair type.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Learn", "Style", "Track"].map((step) => (
              <div
                className="rounded-lg border border-[rgba(58,31,61,.12)] bg-[var(--card)] px-3 py-2 text-center"
                key={step}
              >
                <p className="buudy-mono text-[var(--plum)] font-semibold">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-center md:justify-start">
            <Button asChild>
              <a href="https://app.muuhu.com" target="_blank" rel="noopener noreferrer">
                <Smartphone size={17} />
                Try the app now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
