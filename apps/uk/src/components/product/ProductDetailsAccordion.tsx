"use client";
import Image from "next/image";

import { useState } from "react";
import {
  IconAdjustmentsHorizontal,
  IconAirConditioning,
  IconBolt,
  IconBook2,
  IconBox,
  IconCertificate,
  IconChevronDown,
  IconCircuitMotor,
  IconDiamond,
  IconDroplet,
  IconDroplets,
  IconFlame,
  IconGauge,
  IconHeartHandshake,
  IconLayersIntersect,
  IconMoodSmile,
  IconPackage,
  IconPalette,
  IconPlug,
  IconRipple,
  IconRuler,
  IconScale,
  IconShieldCheck,
  IconShieldHeart,
  IconVolume,
  IconWind,
} from "@tabler/icons-react";
import type { Product } from "@/data/products";
import type { ReactNode } from "react";
import {
  features as defaultFeatures,
  combFeatures,
} from "@/data/productSections";

type ProductIcon = typeof IconDiamond;

const featureIcons: ProductIcon[] = [
  IconLayersIntersect,
  IconShieldHeart,
  IconCircuitMotor,
  IconAdjustmentsHorizontal,
  IconWind,
];

type AccordionItem = {
  id: "unique" | "specs" | "benefits" | "included" | "certifications";
  eyebrow: string;
  icon: ProductIcon;
  title: string;
  content: ReactNode;
};

function getSpecIcon(label: string): ProductIcon {
  const normLabel = label.toLowerCase();

  if (normLabel.includes("motor")) return IconCircuitMotor;
  if (normLabel.includes("wattage")) return IconPlug;
  if (normLabel.includes("ionic")) return IconRipple;
  if (normLabel.includes("heat")) return IconFlame;
  if (normLabel.includes("airflow")) return IconWind;
  if (normLabel.includes("speed")) return IconGauge;
  if (normLabel.includes("noise")) return IconVolume;
  if (normLabel.includes("weight")) return IconScale;
  if (normLabel.includes("attachment")) return IconLayersIntersect;

  if (normLabel.includes("therapy")) return IconHeartHandshake;
  if (normLabel.includes("applicator")) return IconDroplets;
  if (normLabel.includes("water")) return IconDroplet;

  if (normLabel.includes("dimension")) return IconRuler;
  if (normLabel.includes("led")) return IconDiamond;
  if (normLabel.includes("color")) return IconPalette;
  if (normLabel.includes("battery")) return IconBox;
  if (normLabel.includes("use")) return IconMoodSmile;
  if (normLabel.includes("power")) return IconPlug;
  if (normLabel.includes("irradiance") || normLabel.includes("wavelength"))
    return IconDiamond;
  if (normLabel.includes("voltage")) return IconBolt;
  if (normLabel.includes("intensity")) return IconGauge;
  if (normLabel.includes("cooling")) return IconAirConditioning;
  if (normLabel.includes("flash")) return IconBolt;
  if (normLabel.includes("mode")) return IconAdjustmentsHorizontal;
  if (normLabel.includes("lamp")) return IconDiamond;

  return IconDiamond;
}

function AccordionPanel({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentId = `product-detail-${item.id}`;
  const ItemIcon = item.icon;

  return (
    <div className="border-b border-[var(--border)] last:border-b-0">
      <div
        aria-controls={contentId}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-5 py-4 text-left cursor-pointer select-none"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        <span className="flex items-center gap-4">
          <span className="grid h-12 w-12 flex-none place-items-center rounded-full border border-[rgba(184,149,86,.36)] bg-[linear-gradient(145deg,rgba(255,252,247,.98),rgba(184,149,86,.18))] text-[var(--gold)] shadow-[inset_0_1px_0_rgba(255,255,252,.82),0_14px_30px_-24px_rgba(58,31,61,.58)]">
            <ItemIcon aria-hidden="true" size={26} stroke={1.65} />
          </span>
          <span>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--gold-text)]">
              {item.eyebrow}
            </span>
            <span className="font-playfair mt-1 block text-xl text-[var(--plum)]">
              {item.title}
            </span>
          </span>
        </span>
        <IconChevronDown
          className={`flex-none text-[var(--plum)] transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180" : ""
          }`}
          size={19}
          stroke={1.6}
        />
      </div>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        id={contentId}
      >
        <div className="overflow-hidden">
          <div className="pb-5">{item.content}</div>
        </div>
      </div>
    </div>
  );
}

export function ProductDetailsAccordion({ product }: { product: Product }) {
  const [openItems, setOpenItems] = useState<Set<AccordionItem["id"]>>(
    new Set(),
  );

  function toggleItem(id: AccordionItem["id"]) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  const items: AccordionItem[] = [
    {
      id: "unique",
      eyebrow: "Features",
      icon: IconDiamond,
      title:
        product.id === "muuhu-comb"
          ? "What makes our comb unique?"
          : "What makes our styler unique?",
      content: (
        <ul className="grid gap-3">
          {(product.id === "muuhu-comb" ? combFeatures : defaultFeatures).map(
            (feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              return (
                <li
                  key={index}
                  className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 flex-none place-items-center text-[var(--gold)]">
                        {Icon ? <Icon size={27} stroke={1.75} /> : null}
                      </span>
                      <div>
                        <p className="font-sans text-sm font-bold text-[var(--plum)]">
                          {feature.title}
                        </p>
                        <p className="font-sans mt-0.5 text-xs italic font-semibold text-[var(--gold-text)]">
                          {feature.kicker}
                        </p>
                      </div>
                    </div>
                    <span className="buudy-display text-sm text-[var(--gold)] font-medium self-start mt-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="font-sans mt-1 text-xs leading-5 text-[var(--muted)]">
                    {feature.body}
                  </p>
                </li>
              );
            },
          )}
        </ul>
      ),
    },
    {
      id: "specs",
      eyebrow: "Specifications",
      icon: IconGauge,
      title: "The numbers, in detail",
      content: (
        <dl className="grid gap-3">
          {product.specs.map((spec) => {
            const Icon = getSpecIcon(spec.label);
            return (
              <div
                className="grid grid-cols-[1fr_auto] gap-4 items-center"
                key={spec.label}
              >
                <dt className="flex items-center gap-2">
                  <span className="grid h-7 w-7 shrink-0 place-items-center text-[var(--gold)]">
                    <Icon size={23} stroke={1.75} />
                  </span>
                  <span className="font-sans text-sm font-medium text-[var(--muted)]">
                    {spec.label}
                  </span>
                </dt>
                <dd className="font-sans text-right text-sm font-semibold leading-5 text-[var(--plum)]">
                  {spec.value}
                </dd>
              </div>
            );
          })}
        </dl>
      ),
    },
    {
      id: "included",
      eyebrow: "In the box",
      icon: IconPackage,
      title: "Everything you need",
      content: (
        <ul className="grid gap-2">
          {product.included.map((item) => {
            const isUserManual = item.label.toLowerCase().includes("manual");

            return (
              <li
                className="flex items-center justify-between gap-4 rounded-xl border border-[var(--border)] bg-[rgba(247,241,232,.55)] px-4 py-3"
                key={`${item.quantity}-${item.label}`}
              >
                <span className="flex items-center gap-3">
                  {isUserManual ? (
                    <span className="grid h-10 w-10 shrink-0 place-items-center -ml-1 mr-1 text-[var(--gold)] drop-shadow-[0_8px_14px_rgba(184,149,86,.18)]">
                      <IconBook2 aria-hidden="true" size={31} stroke={1.45} />
                    </span>
                  ) : item.image ? (
                    <div
                      className="shrink-0 relative w-10 h-10 -ml-1 mr-1"
                      style={{
                        filter:
                          "invert(56%) sepia(50%) saturate(442%) hue-rotate(352deg) brightness(93%) contrast(93%)",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : null}
                  <span className="buudy-mono text-[var(--gold)]">
                    {item.quantity}
                  </span>
                  <span className="text-sm font-semibold text-[var(--plum)]">
                    {item.label}
                  </span>
                </span>
                {item.tag ? (
                  <span className="buudy-mono rounded-full bg-[rgba(184,149,86,.18)] px-3 py-1 text-[var(--plum)]">
                    {item.tag}
                  </span>
                ) : null}
              </li>
            );
          })}
        </ul>
      ),
    },
    {
      id: "certifications",
      eyebrow: "Product assurance",
      icon: IconCertificate,
      title: "Safety and product signals",
      content: (
        <ul className="grid gap-2 sm:grid-cols-2">
          {product.badges.map((badge) => {
            const Icon = badge.toLowerCase().includes("warranty")
              ? IconHeartHandshake
              : badge.toLowerCase().includes("approved")
                ? IconShieldCheck
                : IconCertificate;

            return (
              <li
                className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm font-semibold leading-5 text-[var(--plum)]"
                key={badge}
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center text-[var(--gold)]">
                  <Icon size={23} stroke={1.75} />
                </span>
                <span>{badge}</span>
              </li>
            );
          })}
        </ul>
      ),
    },
  ];

  return (
    <section
      aria-label="Product details"
      className="mt-8 rounded-[18px] border border-[var(--border)] bg-[rgba(247,241,232,.64)] px-5"
    >
      {items.map((item) => (
        <AccordionPanel
          isOpen={openItems.has(item.id)}
          item={item}
          key={item.id}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </section>
  );
}
