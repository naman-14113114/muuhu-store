import React from "react";
import { comparison } from "@/data/productSections";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="w-5 h-5 text-[var(--plum)]"
    >
      <circle cx="10" cy="10" r="9.375" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M5.55469 10L8.88802 13.3333L15 7.22217"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="w-5 h-5 text-[#c2bcb1]"
    >
      <circle cx="10" cy="10" r="9.375" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M6.5 6.5L13.5 13.5M13.5 6.5L6.5 13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface ComparisonRowProps {
  title: string;
  values: React.ReactNode[];
  isLast?: boolean;
}

function ComparisonRow({ title, values, isLast = false }: ComparisonRowProps) {
  return (
    <div className={isLast ? "" : "border-b border-[rgba(194,188,177,0.4)]"}>
      <div className="flex flex-col md:flex-row md:items-stretch">
        <div className="w-full md:w-1/3 pr-4 py-2.5 md:py-3.5 flex flex-col justify-center">
          <p className="buudy-display font-semibold text-[var(--plum)] text-base md:text-lg leading-tight">
            {title}
          </p>
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex h-full items-stretch">
            {values.map((val, idx) => (
              <div
                key={idx}
                className={`w-1/3 py-2.5 md:py-3.5 flex items-center justify-center text-center px-2 min-h-[48px] ${
                  idx === 0
                    ? `bg-[rgba(58,31,61,0.05)] font-semibold text-[var(--plum)] ${isLast ? "rounded-b-2xl" : ""}`
                    : "text-[var(--muted)]"
                }`}
              >
                {val}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ComparisonTable() {
  return (
    <section className="buudy-section bg-[var(--cream)] py-14 md:py-24">
      <div className="buudy-wrap max-w-[900px]">
        <div className="mb-8 px-4 text-center md:mb-12">
          <h2 className="buudy-heading hidden md:block pb-2">
            What makes Muuhu right for you?
          </h2>
          <h2 className="buudy-heading block md:hidden pb-2 text-[2.2rem]">
            Why is Muuhu right for you?
          </h2>
          <h3 className="buudy-display text-xl md:text-2xl text-[var(--plum-soft)] italic mt-3">
            ({comparison.intro})
          </h3>
        </div>

        <div className="mt-8 flex flex-col md:mt-12">
          <div className="relative border-b border-[rgba(194,188,177,0.4)] pb-4">
            <div className="flex flex-col md:flex-row md:items-stretch h-full">
              <div className="hidden md:block md:w-1/3"></div>
              <div className="w-full md:w-2/3">
                <div className="flex items-center h-full">
                  {comparison.columns.map((col, idx) => (
                    <div key={idx} className={`w-1/3 flex flex-col justify-center items-center h-full px-2 ${col.featured ? 'bg-[rgba(58,31,61,0.05)] rounded-t-2xl py-4' : 'py-4'}`}>
                      <span className={`font-fraunces font-bold text-lg md:text-xl ${col.featured ? 'text-[var(--plum)]' : 'text-[var(--muted)]'}`}>
                        {col.label}
                      </span>
                      <span className={`buudy-mono text-sm mt-1 ${col.featured ? 'text-[var(--gold)]' : 'text-[var(--muted)]'}`}>
                        {col.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {comparison.rows.map((row, index) => {
            const title = row[0];
            const values = row.slice(1).map((val, idx) => {
              if (val === "Yes") return <CheckIcon key={idx} />;
              if (val === "-") return <CrossIcon key={idx} />;
              return <span key={idx} className={idx === 0 ? "buudy-display font-bold text-sm md:text-base text-[var(--plum)]" : "buudy-display font-bold text-sm md:text-base text-[var(--muted)]"}>{val}</span>;
            });
            return (
              <ComparisonRow
                key={index}
                title={title}
                values={values}
                isLast={index === comparison.rows.length - 1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
