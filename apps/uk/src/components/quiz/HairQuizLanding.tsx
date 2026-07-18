import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplets, Scissors } from "lucide-react";

const OPTIONS = [
  {
    href: "/pages/hair-quiz/care",
    eyebrow: "Routine & repair",
    title: "Haircare Quiz",
    copy: "Map your hair type, concerns, and goals to a weekly routine that repairs, hydrates, and protects, using the right attachment and heat.",
    icon: Droplets,
    image: "/images/products/muuhu-hair-dryer/07-prep-hair.webp",
    points: ["Scalp to strand", "Damage-aware heat", "4-week plan"],
  },
  {
    href: "/pages/hair-quiz/style",
    eyebrow: "Look & styling",
    title: "Hairstyle Quiz",
    copy: "Tell us the looks you love and we will build a routine around your attachments, from Coanda curls to a voluminous blowout.",
    icon: Scissors,
    image: "/images/products/muuhu-hair-dryer/01-amazing-hairstyles.webp",
    points: ["Curls to sleek", "Attachment guide", "4-week plan"],
  },
];

export function HairQuizLanding() {
  return (
    <section className="buudy-section bg-[var(--cream)] py-12 md:py-18 lg:py-24">
      <div className="buudy-glow -left-28 top-8 h-[420px] w-[420px] bg-[#f4a17b]" />
      <div className="buudy-glow -right-36 bottom-20 h-[500px] w-[500px] bg-[#a05080]" />

      <div className="buudy-wrap relative z-10">
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className="buudy-eyebrow">Find your routine</p>
          <h1 className="buudy-display mt-4 text-[3rem] leading-[.98] text-[var(--plum)] md:text-[5.4rem]">
            Two quizzes. <em className="buudy-italic text-[var(--gold)]">One</em>{" "}
            incredible tool.
          </h1>
          <p className="buudy-copy mt-5 max-w-2xl">
            Start with the one you need most. The Haircare Quiz builds a repair
            and protection routine; the Hairstyle Quiz builds the looks you
            actually want. Both unlock a personalised 4-week plan.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {OPTIONS.map((option) => {
            const Icon = option.icon;
            return (
              <article
                key={option.href}
                className="group relative flex flex-col overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--card)] shadow-[0_30px_80px_-60px_rgba(58,31,61,.7)]"
              >
                <div className="relative aspect-[5/3] overflow-hidden bg-[var(--plum)]">
                  <Image
                    alt={option.title}
                    className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                    fill
                    sizes="(min-width: 1024px) 46vw, 92vw"
                    src={option.image}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(23,10,24,.82))] p-6 pt-20 text-[var(--cream)]">
                    <span className="buudy-mono inline-flex items-center gap-2 text-[var(--gold)]">
                      <Icon size={14} /> {option.eyebrow}
                    </span>
                    <h2 className="buudy-display mt-2 text-3xl leading-tight">
                      {option.title}
                    </h2>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-6 text-[var(--muted)]">
                    {option.copy}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {option.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-full border border-[rgba(180,145,76,.4)] bg-[rgba(180,145,76,.08)] px-3 py-1 text-xs font-semibold text-[var(--plum)]"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>

                  <ButtonLike href={option.href} label={`Start the ${option.title}`} />
                </div>
              </article>
            );
          })}
        </div>

        <p className="buudy-mono mt-10 text-center text-[var(--gold)]">
          Both quizzes take about 60 seconds
        </p>
      </div>
    </section>
  );
}

function ButtonLike({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="buudy-cart-wipe mt-6 inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-full border border-[var(--plum)] bg-[var(--plum)] px-6 text-sm font-semibold text-[var(--cream)] shadow-[0_14px_30px_-18px_rgba(58,31,61,.8)] transition duration-200 ease-out hover:border-[var(--gold)]"
    >
      <span className="buudy-cart-wipe-content inline-flex items-center justify-center gap-2">
        {label}
        <ArrowRight size={16} />
      </span>
    </Link>
  );
}
