/* eslint-disable @next/next/no-img-element */
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
                className={`w-1/4 py-2.5 md:py-3.5 flex items-center justify-center text-center px-1 md:px-2 min-h-[48px] ${
                  idx === 0
                    ? `bg-[#efe4d8] font-semibold text-[var(--plum)] ${isLast ? "rounded-b-2xl" : ""}`
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
      <div className="buudy-wrap max-w-[1000px]">
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
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-1/4 rounded-t-2xl bg-[#efe4d8] md:left-1/3 md:w-1/6"
            />

            {/* Logo/Name Row (ABOVE) */}
            <div className="relative border-0 pt-4">
              <div className="flex flex-col md:flex-row md:items-stretch h-full">
                <div className="hidden md:block md:w-1/3"></div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center h-full">
                    {comparison.columns.map((col, idx) => (
                      <div key={idx} className="w-1/4 flex flex-col justify-center items-center h-full px-1 md:px-2 pt-2 pb-1">
                        {idx === 0 && (
                          <img
                            src="/images/products/muuhu-hair-dryer/muuhu-logo-cropped.png"
                            alt="Muuhu Logo"
                            className="h-7 w-20 md:h-10 md:w-32 object-contain scale-[1.2] mb-1.5 md:mb-2"
                            decoding="async"
                            loading="lazy"
                          />
                        )}
                        {idx === 1 && (
                          <img
                            src="/images/logos/dyson_logo.webp"
                            alt="Dyson Logo"
                            className="h-7 w-20 md:h-10 md:w-32 object-contain scale-[1.1]"
                            decoding="async"
                            loading="lazy"
                          />
                        )}
                        {idx === 2 && (
                          <img
                            src="/images/logos/shark_logo.png"
                            alt="Shark Logo"
                            className="h-6 w-16 md:h-8 md:w-24 object-contain"
                            decoding="async"
                            loading="lazy"
                          />
                        )}
                        {idx === 3 && (
                          <img
                            src="/images/logos/ghd_logo.webp"
                            alt="GHD Logo"
                            className="h-6 w-16 md:h-8 md:w-24 object-contain"
                            decoding="async"
                            loading="lazy"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Images Row (BELOW) */}
            <div className="relative border-b border-[rgba(194,188,177,0.4)] pb-4">
              <div className="flex flex-col md:flex-row md:items-stretch h-full">
                <div className="hidden md:block md:w-1/3"></div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-end h-full min-h-[60px] md:min-h-[80px]">
                    <div className="w-1/4 flex justify-center items-end h-full px-2 overflow-visible">
                      <img
                        src="/images/products/muuhu-hair-dryer/comparison/muuhu_comparison.webp"
                        alt="Muuhu AirPro"
                        className="h-16 sm:h-20 md:h-28 w-auto object-contain transform origin-bottom rounded-2xl"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-1/4 flex justify-center items-end h-full px-2">
                      <img
                        src="/images/products/muuhu-hair-dryer/comparison/dyson-airwrap-multi-styler.png"
                        alt="Dyson Airwrap Multi-Styler"
                        className="h-14 sm:h-16 md:h-24 w-auto object-contain transform origin-bottom mix-blend-multiply"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-1/4 flex justify-center items-end h-full px-2">
                      <img
                        src="/images/products/muuhu-hair-dryer/comparison/shark-flexstyle-air-styling-system.png"
                        alt="Shark FlexStyle Air Styling System"
                        className="h-14 sm:h-16 md:h-24 w-auto object-contain transform origin-bottom mix-blend-multiply"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-1/4 flex justify-center items-end h-full px-2">
                      <img
                        src="/images/products/muuhu-hair-dryer/comparison/ghd-helios-professional-hair-dryer.jpg"
                        alt="GHD Helios Professional Hair Dryer"
                        className="h-14 sm:h-16 md:h-24 w-auto object-contain transform origin-bottom mix-blend-multiply"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {comparison.rows.map((row, index) => {
            const title = row[0];
            const values = row.slice(1).map((val, idx) => {
              if (val === "Yes") return <CheckIcon key={idx} />;
              if (val === "-") return <CrossIcon key={idx} />;
              return <span key={idx} className={idx === 0 ? "buudy-display font-bold text-xs md:text-sm text-[var(--plum)]" : "buudy-display font-bold text-xs md:text-sm text-[var(--muted)]"}>{val}</span>;
            });
            return (
              <ComparisonRow
                key={index}
                title={title}
                values={values}
                isLast={false}
              />
            );
          })}

          <ComparisonRow
            title="Price"
            values={comparison.columns.map((col, idx) => (
              <span key={idx} className={`buudy-display text-base md:text-lg ${idx === 0 ? 'font-bold text-[var(--plum)]' : 'text-[var(--muted)]'}`}>
                {idx === 0 && <span className="line-through mr-1.5 opacity-80">£299</span>}
                {col.price}
              </span>
            ))}
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
}
