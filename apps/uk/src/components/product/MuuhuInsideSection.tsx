"use client";

import Image from "next/image";
import { useState } from "react";

const insideFeatures = [
  {
    id: "airflow-system",
    label: "Powerful airflow",
    title: "AirPro airflow system",
    copy:
      "The 110,000 RPM brushless motor drives fast, controlled airflow for quick drying, smoother styling, and a lighter everyday routine.",
    pointX: 40,
    pointY: 12,
    labelX: 19,
    labelY: 12,
    side: "left",
  },
  {
    id: "temperature-indicator",
    label: "Temperature indicator",
    title: "Clear heat indicator",
    copy:
      "Visible heat indicators make it easy to see your selected setting before you style, so you can move between careful drying and faster finishing with confidence.",
    pointX: 50,
    pointY: 43,
    labelX: 20,
    labelY: 43,
    side: "left",
  },
  {
    id: "temperature-button",
    label: "Temperature button",
    title: "3 temperature settings",
    copy:
      "Choose cool air, medium heat, or high heat depending on your hair type, section size, and how polished you want the final finish to look.",
    pointX: 50,
    pointY: 49,
    labelX: 20,
    labelY: 49,
    side: "left",
  },
  {
    id: "fan-speed-button",
    label: "Fan speed control",
    title: "3 speed settings",
    copy:
      "Choose low, medium, or high airflow for rough drying, root lift, smoothing, or slower detail work around the fringe and ends.",
    pointX: 50,
    pointY: 55,
    labelX: 20,
    labelY: 55,
    side: "left",
  },
  {
    id: "hot-cool-wind",
    label: "Hot and cool air",
    title: "Hot and cool styling control",
    copy:
      "Use warmer airflow to shape and smooth, then finish with cooler air to help set the style and keep hair feeling more comfortable.",
    pointX: 50,
    pointY: 62,
    labelX: 82,
    labelY: 62,
    side: "right",
  },
  {
    id: "safe-lock",
    label: "Attachment lock",
    title: "Secure attachment lock",
    copy:
      "The lock system helps each styling head sit securely in place, making attachment changes feel quick, stable, and easy during your routine.",
    pointX: 53,
    pointY: 29,
    labelX: 83,
    labelY: 29,
    side: "right",
  },
  {
    id: "air-inlet",
    label: "Filtered air inlet",
    title: "Filtered air inlet",
    copy:
      "The lower air inlet supports steady airflow through the body while helping protect the motor area during daily styling.",
    pointX: 50,
    pointY: 86,
    labelX: 84,
    labelY: 86,
    side: "right",
  },
] as const;

export function MuuhuInsideSection() {
  const [activeFeatureId, setActiveFeatureId] = useState<
    (typeof insideFeatures)[number]["id"]
  >(insideFeatures[0].id);
  const activeFeature =
    insideFeatures.find((feature) => feature.id === activeFeatureId) ??
    insideFeatures[0];
  const activeIndex = insideFeatures.findIndex(
    (feature) => feature.id === activeFeature.id,
  );
  const nextFeature =
    insideFeatures[(activeIndex + 1) % insideFeatures.length];

  return (
    <section className="buudy-section bg-[var(--cream)] py-16 text-[var(--plum)] md:py-24">
      <div className="buudy-wrap lg:hidden">
        <div className="mx-auto max-w-[430px] text-center">
          <p className="buudy-mono text-[var(--gold-text)]">What&apos;s inside</p>
          <h2 className="buudy-display mt-3 text-[2.7rem] leading-[1.02] text-[var(--plum)]">
            Muuhu AirPro engineering.
          </h2>
          <p className="buudy-copy mt-5 !text-[var(--plum)]">
            Explore the airflow, heat, and attachment controls built into the
            Muuhu AirPro 7-in-1 hair dryer.
          </p>
        </div>

        <div className="relative mx-auto mt-8 h-[min(620px,160vw)] w-full max-w-[760px] overflow-visible sm:!h-[720px]">
          <Image
            alt="Muuhu AirPro hair dryer control body"
            className="absolute left-1/2 top-1/2 h-[min(560px,145vw)] w-auto -translate-x-1/2 -translate-y-1/2 object-contain sm:!h-[680px]"
            height={1787}
            loading="lazy"
            sizes="(min-width: 640px) 48vw, 62vw"
            src="/images/products/muuhu-hair-dryer/muuhu-airpro-engineering-controls.png"
            width={766}
          />

          {insideFeatures.map((feature) => {
            const isActive = feature.id === activeFeature.id;
            const connectorLeft =
              feature.side === "left"
                ? feature.labelX + 11
                : feature.pointX + 2.5;
            const connectorWidth =
              feature.side === "left"
                ? Math.max(4, feature.pointX - feature.labelX - 13)
                : Math.max(4, feature.labelX - feature.pointX - 13.5);

            return (
              <div
                className="pointer-events-none absolute inset-0"
                key={feature.id}
              >
                <span
                  aria-hidden="true"
                  className={`absolute h-px origin-left ${
                    isActive ? "bg-[var(--plum)]" : "bg-[var(--gold)]/45"
                  }`}
                  style={{
                    left: `${connectorLeft}%`,
                    top: `${feature.pointY}%`,
                    width: `${connectorWidth}%`,
                  }}
                />
                <button
                  aria-label={feature.label}
                  aria-pressed={isActive}
                  className="group pointer-events-auto absolute grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-transparent"
                  onClick={() => setActiveFeatureId(feature.id)}
                  style={{
                    left: `${feature.pointX}%`,
                    top: `${feature.pointY}%`,
                  }}
                  type="button"
                >
                  <span
                    aria-hidden="true"
                    className={`grid size-7 place-items-center rounded-full border text-base font-semibold leading-none shadow-md transition sm:size-9 sm:text-lg ${
                      isActive
                        ? "border-[var(--plum)] bg-[var(--plum)] text-[var(--cream)] ring-4 ring-[var(--gold)]/25"
                        : "border-[var(--gold)]/50 bg-white text-[var(--plum)] group-hover:border-[var(--plum)] group-hover:bg-[var(--plum)] group-hover:text-[var(--cream)]"
                    }`}
                  >
                    +
                  </span>
                </button>
                <button
                  className={`pointer-events-auto absolute min-w-[104px] -translate-x-1/2 -translate-y-1/2 rounded-full border px-2 py-1.5 text-center text-[10px] font-semibold leading-tight shadow-lg transition sm:min-w-[150px] sm:px-4 sm:py-2 sm:text-xs ${
                    isActive
                      ? "border-[var(--plum)] bg-[var(--plum)] text-[var(--cream)]"
                      : "border-[var(--border)] bg-white/90 text-[var(--plum)] hover:border-[var(--plum)] hover:bg-[var(--plum)] hover:text-[var(--cream)]"
                  }`}
                  onClick={() => setActiveFeatureId(feature.id)}
                  style={{
                    left: `${feature.labelX}%`,
                    top: `${feature.labelY}%`,
                  }}
                  type="button"
                >
                  {feature.label}
                </button>
              </div>
            );
          })}
        </div>

        <div
          className="mx-auto mt-6 max-w-[430px] rounded-[18px] border border-[var(--gold)]/35 bg-[var(--plum)] p-6 text-left text-[var(--cream)] shadow-2xl shadow-[rgba(59,30,64,0.18)]"
          aria-live="polite"
        >
          <p className="buudy-mono text-[var(--gold)]">
            Feature {activeIndex + 1} of {insideFeatures.length}
          </p>
          <h3 className="buudy-display mt-3 text-2xl leading-tight text-[var(--cream)]">
            {activeFeature.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[var(--cream)]/88">
            {activeFeature.copy}
          </p>
          <button
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/35 px-5 py-3 text-sm font-semibold text-[var(--cream)] transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--plum)]"
            onClick={() => setActiveFeatureId(nextFeature.id)}
            type="button"
          >
            Next feature
            <span aria-hidden="true">+</span>
          </button>
        </div>
      </div>

      <div className="buudy-wrap hidden items-start gap-10 lg:grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div className="order-2 mx-auto w-full max-w-[430px] text-center lg:order-1 lg:text-left">
          <p className="buudy-mono text-[var(--gold-text)]">What&apos;s inside</p>
          <h2 className="buudy-display mt-3 text-[2.7rem] leading-[1.02] text-[var(--plum)] md:text-6xl">
            Muuhu AirPro engineering.
          </h2>
          <p className="buudy-copy mt-5 !text-[var(--plum)]">
            Explore the airflow, heat, and attachment controls built into the
            Muuhu AirPro 7-in-1 hair dryer.
          </p>

          <div
            className="mt-8 rounded-[18px] border border-[var(--gold)]/35 bg-[var(--plum)] p-6 text-left text-[var(--cream)] shadow-2xl shadow-[rgba(59,30,64,0.18)]"
            aria-live="polite"
          >
            <p className="buudy-mono text-[var(--gold)]">
              Feature {activeIndex + 1} of {insideFeatures.length}
            </p>
            <h3 className="buudy-display mt-3 text-2xl leading-tight text-[var(--cream)]">
              {activeFeature.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--cream)]/88">
              {activeFeature.copy}
            </p>
            <button
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/35 px-5 py-3 text-sm font-semibold text-[var(--cream)] transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--plum)]"
              onClick={() => setActiveFeatureId(nextFeature.id)}
              type="button"
            >
              Next feature
              <span aria-hidden="true">+</span>
            </button>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-1 lg:hidden">
            {insideFeatures.map((feature) => {
              const isActive = feature.id === activeFeature.id;

              return (
                <button
                  className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold ${
                    isActive
                      ? "border-[var(--plum)] bg-[var(--plum)] text-[var(--cream)]"
                      : "border-[var(--border)] bg-white text-[var(--plum)]"
                  }`}
                  key={feature.id}
                  onClick={() => setActiveFeatureId(feature.id)}
                  type="button"
                >
                  {feature.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[760px] lg:order-2">
          <div className="relative h-[min(600px,156vw)] overflow-hidden rounded-[26px] bg-[var(--cream)] sm:h-[660px] md:h-[720px] lg:h-auto lg:min-h-[820px]">
            <Image
              alt="Muuhu AirPro hair dryer control body"
              className="absolute left-1/2 top-1/2 h-[min(560px,145vw)] w-auto -translate-x-1/2 -translate-y-1/2 object-contain sm:h-[620px] md:h-[680px] lg:!h-[790px]"
              height={1787}
              loading="lazy"
              sizes="(min-width: 1024px) 32vw, 70vw"
              src="/images/products/muuhu-hair-dryer/muuhu-airpro-engineering-controls.png"
              width={766}
            />

            {insideFeatures.map((feature) => {
              const isActive = feature.id === activeFeature.id;
              const connectorLeft =
                feature.side === "left"
                  ? feature.labelX + 11
                  : feature.pointX + 2.5;
              const connectorWidth =
                feature.side === "left"
                  ? Math.max(4, feature.pointX - feature.labelX - 13)
                  : Math.max(4, feature.labelX - feature.pointX - 13.5);

              return (
                <div
                  className="pointer-events-none absolute inset-0 hidden lg:block"
                  key={feature.id}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute h-px origin-left ${
                      isActive ? "bg-[var(--plum)]" : "bg-[var(--gold)]/45"
                    }`}
                    style={{
                      left: `${connectorLeft}%`,
                      top: `${feature.pointY}%`,
                      width: `${connectorWidth}%`,
                    }}
                  />
                  <button
                    aria-label={feature.label}
                    aria-pressed={isActive}
                    className={`pointer-events-auto absolute grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border text-lg font-semibold leading-none shadow-md transition before:absolute before:-inset-1 before:content-[''] ${
                      isActive
                        ? "border-[var(--plum)] bg-[var(--plum)] text-[var(--cream)] ring-4 ring-[var(--gold)]/25"
                        : "border-[var(--gold)]/50 bg-white text-[var(--plum)] hover:border-[var(--plum)] hover:bg-[var(--plum)] hover:text-[var(--cream)]"
                    }`}
                    onClick={() => setActiveFeatureId(feature.id)}
                    style={{
                      left: `${feature.pointX}%`,
                      top: `${feature.pointY}%`,
                    }}
                    type="button"
                  >
                    <span aria-hidden="true">+</span>
                  </button>
                  <button
                    className={`pointer-events-auto absolute min-w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border px-4 py-2 text-xs font-semibold shadow-lg transition ${
                      isActive
                        ? "border-[var(--plum)] bg-[var(--plum)] text-[var(--cream)]"
                        : "border-[var(--border)] bg-white/90 text-[var(--plum)] hover:border-[var(--plum)] hover:bg-[var(--plum)] hover:text-[var(--cream)]"
                    }`}
                    onClick={() => setActiveFeatureId(feature.id)}
                    style={{
                      left: `${feature.labelX}%`,
                      top: `${feature.labelY}%`,
                    }}
                    type="button"
                  >
                    {feature.label}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
