import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconBook2,
  IconBrush,
  IconCircleCheck,
  IconDroplet,
  IconGift,
  IconPackage,
  IconShieldCheck,
  IconTools,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/Button";
import {
  freeGiftBundleFooter,
  type FreeGiftDetail,
} from "@/data/freeGifts";

const offerHref = "/products/muuhu-hair-dryer#free-gifts";

type BulletIconKey =
  | "shield"
  | "package"
  | "book"
  | "droplet"
  | "brush"
  | "tools"
  | "gift"
  | "check";

function getBulletIconKey(gift: FreeGiftDetail, value: string): BulletIconKey {
  const text = `${gift.slug} ${value}`.toLowerCase();

  if (text.includes("protect") || text.includes("safe") || text.includes("heat protection")) {
    return "shield";
  }

  if (
    text.includes("packag") ||
    text.includes("storage") ||
    text.includes("store") ||
    text.includes("organisation") ||
    text.includes("organization") ||
    text.includes("unboxing")
  ) {
    return "package";
  }

  if (
    text.includes("e-book") ||
    text.includes("ebook") ||
    text.includes("guide") ||
    text.includes("chapter") ||
    text.includes("hair-type")
  ) {
    return "book";
  }

  if (text.includes("serum") || text.includes("oil")) {
    return "droplet";
  }

  if (text.includes("scalp") || text.includes("massage") || text.includes("comb")) {
    return "brush";
  }

  if (text.includes("attachment") || text.includes("system") || text.includes("tool")) {
    return "tools";
  }

  if (text.includes("gift") || text.includes("value")) {
    return "gift";
  }

  return "check";
}

function BulletIconGraphic({ iconKey }: { iconKey: BulletIconKey }) {
  const iconProps = { "aria-hidden": true, size: 15, stroke: 1.65 };

  switch (iconKey) {
    case "shield":
      return <IconShieldCheck {...iconProps} />;
    case "package":
      return <IconPackage {...iconProps} />;
    case "book":
      return <IconBook2 {...iconProps} />;
    case "droplet":
      return <IconDroplet {...iconProps} />;
    case "brush":
      return <IconBrush {...iconProps} />;
    case "tools":
      return <IconTools {...iconProps} />;
    case "gift":
      return <IconGift {...iconProps} />;
    case "check":
      return <IconCircleCheck {...iconProps} />;
  }
}

function BulletIcon({ gift, value }: { gift: FreeGiftDetail; value: string }) {
  const iconKey = getBulletIconKey(gift, value);

  return (
    <span className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full border border-[rgba(184,149,86,.24)] bg-[rgba(184,149,86,.08)] text-[var(--gold)]">
      <BulletIconGraphic iconKey={iconKey} />
    </span>
  );
}

export function FreeGiftDetailPage({ gift }: { gift: FreeGiftDetail }) {
  return (
    <>
      <section className="buudy-section bg-[var(--cream)] py-12 md:py-20">
        <div className="buudy-wrap grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
          <div>
            <p className="buudy-eyebrow inline-flex items-center gap-2">
              <IconGift aria-hidden="true" size={15} stroke={1.65} />
              {gift.eyebrow}
            </p>
            <h1 className="buudy-heading mt-4 max-w-3xl">{gift.title}</h1>
            <p className="buudy-copy mt-5 max-w-3xl text-base md:text-lg">
              {gift.intro}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild>
                <Link href={offerHref}>
                  {gift.primaryCtaLabel}
                  <IconArrowRight aria-hidden="true" size={17} stroke={1.65} />
                </Link>
              </Button>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-[var(--muted)]">
              {gift.note}
            </p>
          </div>

          <aside className="rounded-[8px] border border-[var(--border)] bg-[var(--card)] p-4 shadow-[0_24px_54px_-36px_rgba(58,31,61,.55)] md:p-5">
            <div className="relative aspect-square overflow-hidden rounded-[8px] bg-[var(--blush)]">
              <Image
                alt={gift.imageAlt}
                className="object-contain p-4"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                src={gift.image}
              />
            </div>
            <h2 className="buudy-display mt-5 text-2xl leading-tight text-[var(--plum)] md:text-3xl">
              {gift.cardTitle}
            </h2>
            <ul className="mt-4 grid gap-3">
              {gift.cardBullets.map((bullet) => (
                <li
                  className="flex gap-3 text-sm leading-6 text-[var(--muted)]"
                  key={bullet}
                >
                  <BulletIcon gift={gift} value={bullet} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="buudy-section border-y border-[var(--border)] bg-[rgba(241,223,210,.42)] py-14 md:py-20">
        <div className="buudy-wrap grid gap-8 md:grid-cols-2 md:gap-12">
          {gift.sections.map((section) => (
            <article key={section.title}>
              <p className="buudy-eyebrow">Muuhu Styling Ritual</p>
              <h2 className="buudy-display mt-3 text-3xl leading-tight text-[var(--plum)] md:text-4xl">
                {section.title}
              </h2>
              <div className="buudy-copy mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets ? (
                <ul className="mt-5 grid gap-3">
                  {section.bullets.map((bullet) => (
                    <li
                      className="flex gap-3 text-sm leading-6 text-[var(--muted)]"
                      key={bullet}
                    >
                      <BulletIcon gift={gift} value={bullet} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="buudy-section bg-[var(--ink)] py-14 text-center text-[var(--cream)] md:py-20">
        <div className="buudy-wrap max-w-3xl">
          <p className="buudy-eyebrow">Complete The Styling System</p>
          <h2 className="buudy-display mt-3 text-4xl leading-tight md:text-5xl">
            Buy the Muuhu AirPro, unlock the full bonus bundle.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[rgba(247,241,232,.72)]">
            {freeGiftBundleFooter}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href={offerHref}>
                {gift.primaryCtaLabel}
                <IconArrowRight aria-hidden="true" size={17} stroke={1.65} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
