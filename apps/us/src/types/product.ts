import type { StoreCurrency } from "@/lib/market";

export interface Product {
  id: string;
  sku: string;
  slug: string;
  template: string;
  name: string;
  heroTitle: string;
  heroEmphasis: string;
  shortDescription: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  currency: StoreCurrency;
  priceCents: number;
  compareAtCents: number;
  rating: number;
  reviewCount: number;
  customerCount: string;
  promoCode: string;
  promoLabel: string;
  cartImage: string;
  gallery: { src: string; alt: string }[];
  specs: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  gifts: { id: string; name: string; valueCents: number; image: string; link?: string }[];
  included: { label: string; quantity: number; tag?: string; image?: string }[];
  badges: string[];
  keyBenefits?: string[];
  highlights?: string[];
}
