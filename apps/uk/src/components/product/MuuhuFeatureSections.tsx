"use client";

import { Button } from "@/components/ui/Button";
import {
  IconDeviceMobile,
  IconDroplets,
  IconLayersIntersect,
  IconRipple,
  IconShieldCheck,
} from "@tabler/icons-react";
import { productAsset } from "@/lib/media";

export function MuuhuProductFocus() {
  return (
    <section className="buudy-section bg-[var(--cream)] md: md: py-14 md:py-24">
      <div className="buudy-wrap grid items-center gap-8 md:gap-14 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-[18px] bg-[var(--blush)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Style without compromise"
            className="object-cover absolute inset-0 w-full h-full"
            src={productAsset("muuhu-product-focus-v2.webp")}
            decoding="async"
            loading="eager"
          />
        </div>
        <div>
          <p className="buudy-mono text-[var(--gold)]">Advanced Technology</p>
          <h2 className="buudy-display mt-3 text-[2.5rem] leading-tight text-[var(--plum)] md:text-5xl">
            Style without <em className="buudy-italic">compromise</em>.
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-[var(--muted)]">
            Our 110,000 RPM brushless motor combined with the Coanda effect
            allows you to wrap, curl, and style your hair effortlessly. Achieve
            salon-quality results at home with zero extreme heat damage.
          </p>
        </div>
      </div>
    </section>
  );
}

export function MuuhuAppPromo() {
  return (
    <section
      className="buudy-section bg-[var(--cream)] md: md: py-14 md:py-24"
      id="muuhu-app"
    >
      <div className="buudy-wrap grid items-center gap-8 md:gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="relative aspect-[1200/799] w-full overflow-hidden rounded-[18px] bg-[var(--blush)] lg:order-last">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Muuhu Companion App"
            className="object-cover absolute inset-0 w-full h-full"
            src={productAsset("muuhu-app-promo.webp")}
            decoding="async"
            loading="eager"
          />
          <span className="buudy-mono absolute left-5 top-5 rounded-full bg-[rgba(247,241,232,.9)] px-4 py-2 text-[var(--plum)] backdrop-blur">
            Free with Muuhu
          </span>
        </div>
        <div>
          <p className="buudy-eyebrow">Companion App</p>
          <h2 className="buudy-display mt-2 text-[2.5rem] leading-tight text-[var(--plum)] md:text-5xl">
            Muuhu <span className="text-[var(--gold-text)]">Style App</span>.
          </h2>
          <p className="buudy-copy mt-3 text-sm leading-6">
            The Muuhu Style App is the ultimate companion for your hair dryer.
            It helps you unlock the full potential of all 7 attachments with
            guided tutorials, customized heat settings, and personalized
            routines tailored to your hair type.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Learn", "Style", "Track"].map((step) => (
              <div
                className="rounded-lg border border-[rgba(58,31,61,.12)] bg-[var(--card)] px-3 py-2 text-center"
                key={step}
              >
                <p className="buudy-mono text-[var(--plum)] font-semibold">
                  {step}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-center md:justify-start">
            <Button asChild>
              <a
                href="https://app.muuhu.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconDeviceMobile size={17} stroke={1.7} />
                Try the app now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const stylingDetails = [
  {
    icon: IconDroplets,
    title: "Start with towel-dried hair",
    copy: "The dryer performs best when hair is damp, not dripping. Add heat protectant before styling.",
  },
  {
    icon: IconShieldCheck,
    title: "Control heat by texture",
    copy: "Use cool or medium heat for delicate strands, and reserve high heat for fast pre-drying.",
  },
  {
    icon: IconRipple,
    title: "Polish with negative ions",
    copy: "200M+ negative ions help reduce visible frizz and leave the finish smoother.",
  },
  {
    icon: IconLayersIntersect,
    title: "One set for every finish",
    copy: "Seven attachments cover smooth blowouts, root lift, curls, diffusing, and precise drying.",
  },
];

const hairTextureGroups = [
  {
    label: "Straight Hair",
    codes: ["1A", "1B", "1C"],
    patterns: ["straight", "straight-soft", "straight-curve"],
  },
  {
    label: "Wavy Hair",
    codes: ["2A", "2B", "2C"],
    patterns: ["wavy-soft", "wavy", "wavy-deep"],
  },
  {
    label: "Curly Hair",
    codes: ["3A", "3B", "3C"],
    patterns: ["curly-soft", "curly", "curly-tight"],
  },
  {
    label: "Coily Hair",
    codes: ["4A", "4B", "4C"],
    patterns: ["coily-soft", "coily", "coily-tight"],
  },
] as const;

type HairStrandPattern = (typeof hairTextureGroups)[number]["patterns"][number];

const strandPaths: Record<HairStrandPattern, string> = {
  straight: "M16 6 C15 26 15 54 16 78",
  "straight-soft": "M16 6 C12 28 20 54 16 78",
  "straight-curve": "M17 6 C22 28 10 54 16 78",
  "wavy-soft": "M16 6 C7 18 25 27 16 39 C7 51 25 62 16 78",
  wavy: "M16 6 C4 17 28 27 16 39 C4 51 28 62 16 78",
  "wavy-deep": "M16 6 C2 16 30 27 16 39 C2 51 30 64 16 78",
  "curly-soft":
    "M16 7 C28 7 29 24 16 24 C3 24 3 41 16 41 C29 41 29 58 16 58 C5 58 5 74 16 78",
  curly:
    "M16 7 C31 7 31 23 16 23 C1 23 1 39 16 39 C31 39 31 55 16 55 C1 55 1 74 16 78",
  "curly-tight":
    "M16 7 C30 7 30 20 16 20 C2 20 2 33 16 33 C30 33 30 46 16 46 C2 46 2 59 16 59 C30 59 30 73 16 78",
  "coily-soft":
    "M16 7 C28 7 28 18 16 18 C4 18 4 29 16 29 C28 29 28 40 16 40 C4 40 4 51 16 51 C28 51 28 63 16 63 C5 63 5 75 16 78",
  coily:
    "M16 7 C29 7 29 17 16 17 C3 17 3 27 16 27 C29 27 29 37 16 37 C3 37 3 47 16 47 C29 47 29 57 16 57 C3 57 3 68 16 68 C29 68 29 76 16 78",
  "coily-tight":
    "M16 7 C30 7 30 16 16 16 C2 16 2 25 16 25 C30 25 30 34 16 34 C2 34 2 43 16 43 C30 43 30 52 16 52 C2 52 2 61 16 61 C30 61 30 70 16 70 C3 70 3 77 16 78",
};

function HairStrand({ pattern }: { pattern: HairStrandPattern }) {
  return (
    <svg
      aria-hidden="true"
      className="h-20 w-6 text-[var(--plum)]"
      fill="none"
      viewBox="0 0 32 84"
    >
      <path
        d={strandPaths[pattern]}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

export function MuuhuHairTypeSection() {
  return (
    <section
      className="buudy-section bg-[var(--cream)] py-14 md:py-24"
      id="hair-type-fit"
    >
      <div className="buudy-wrap grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-stretch">
        <div className="mx-auto w-full max-w-[430px] sm:max-w-[460px] md:max-w-[520px] lg:max-w-none lg:h-full">
          <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[18px] bg-[var(--blush)] shadow-[0_28px_70px_-42px_rgba(58,31,61,.65)] lg:aspect-auto lg:h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Made for every hair type"
              className="rounded-[18px]"
              decoding="async"
              loading="eager"
              src={productAsset("muuhu-hair-dryer-for-every-hair-type.webp")}
              style={{
                height: "100%",
                inset: 0,
                objectFit: "cover",
                objectPosition: "center",
                position: "absolute",
                width: "100%",
              }}
            />
          </div>
        </div>

        <div className="lg:order-last flex flex-col justify-center">
          <p className="buudy-mono text-[var(--gold-text)]">Hair type fit</p>
          <h2 className="buudy-display mt-3 text-[2.45rem] leading-tight text-[var(--plum)] md:text-5xl">
            Made for every hair type, guided by the right attachment.
          </h2>
          <p className="buudy-copy mt-4 max-w-2xl text-sm leading-6 md:text-base md:leading-7">
            Muuhu can be used across straight, wavy, curly, and coily hair. What
            changes is the attachment, heat level, speed, and section size you
            choose for your texture.
          </p>

          <div className="mt-7 rounded-[18px] border border-[rgba(58,31,61,.10)] bg-[rgba(255,252,247,.78)] p-5 lg:p-7 shadow-[0_18px_50px_-42px_rgba(58,31,61,.45)]">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <p className="buudy-display text-2xl leading-tight text-[var(--plum)]">
                Works on
              </p>
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--gold-text)]">
                Straight to coily
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
              {hairTextureGroups.map((group) => (
                <div className="text-center" key={group.label}>
                  <div className="flex items-end justify-center gap-1.5 rounded-[14px] bg-[rgba(58,31,61,.035)] px-2 pt-5 pb-3">
                    {group.patterns.map((pattern, index) => (
                      <div
                        className="flex flex-col items-center gap-2.5"
                        key={pattern}
                      >
                        <span className="text-[10px] font-semibold text-[var(--muted)]">
                          {group.codes[index]}
                        </span>
                        <HairStrand pattern={pattern} />
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[.12em] text-[var(--plum)]">
                    {group.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              Customers do not need to know their exact code. Pick the closest
              visual, then follow the matching attachment and heat guidance.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {stylingDetails.map(({ icon: Icon, title, copy }) => (
              <div className="flex gap-3" key={title}>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[rgba(184,149,86,.24)] bg-[linear-gradient(145deg,rgba(255,252,247,.96),rgba(184,149,86,.14))] text-[var(--gold)] shadow-[inset_0_1px_0_rgba(255,255,255,.75)]">
                  <Icon size={18} stroke={1.45} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--plum)]">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                    {copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
