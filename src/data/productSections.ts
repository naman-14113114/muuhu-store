import { productAsset } from "@/lib/media";

export type Feature = {
  title: string;
  kicker: string;
  body: string;
};

export type Transformation = {
  id: string;
  concern: string;
  image: string;
  title: string;
  quote: string;
  name: string;
};

export type ReviewVideo = {
  id: string;
  poster: string;
  src: string;
  fallbackSrc?: string;
};

export type Wavelength = {
  nm: string;
  name: string;
  description: string;
  color: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const features: Feature[] = [
  {
    title: "7-in-1 Multifunctional Styler",
    kicker: "Ultimate Versatility",
    body: "Unleash your hair's potential. Dry, straighten, curl, and volumize with one base. The ultimate styling tool designed to replace your hairdryer, straightener, and curling wand.",
  },
  {
    title: "60% Cooler Than Traditional Tools",
    kicker: "Zero Extreme Heat Damage",
    body: "Crafted with a tourmaline ceramic heating element, this hot air styler ensures even heat distribution while minimizing damage. Get salon-worthy hair without the extreme heat.",
  },
  {
    title: "110,000 RPM Brushless Motor",
    kicker: "Ultra-Fast 1200W Drying",
    body: "Experience rapid drying times with a powerful 1200W high-speed motor. The intelligent aerodynamic design drives moisture from the hair rapidly for effortless styling.",
  },
  {
    title: "10 Temperature Control Settings",
    kicker: "Precision Styling",
    body: "Choose from 10 distinct temperature and speed control settings to perfectly match your hair type and desired style, ensuring you get flawless results every single time.",
  },
  {
    title: "Effortless Curls & Waves",
    kicker: "The Coanda Effect",
    body: "With 16MM-20MM barrel diameters, the aerodynamic Coanda effect automatically wraps your hair to create bouncy curls, loose waves, and sleek straight looks in under 10 minutes.",
  },
];

export const realLifeImages = [
  {
    src: productAsset("04-muuhu-hair-dryer-lifestyle.webp"),
    alt: "Salon professional results at home",
  },
  {
    src: productAsset("02-muuhu-hair-dryer-attachments.webp"),
    alt: "Muuhu 7 styling attachments",
  },
];

export const transformations: Transformation[] = [
  {
    id: "result-01",
    image: productAsset("01-muuhu-hair-dryer-hero.webp"), // Placeholder
    concern: "Frizz & Flyaways",
    title: "Game changer for frizzy hair",
    quote: '"My hair used to take 40 minutes to dry and would always be frizzy. Now it takes 10 minutes and looks like I just stepped out of a salon."',
    name: "Emma S.",
  },
  {
    id: "result-02",
    image: productAsset("03-muuhu-hair-dryer-in-use.webp"), // Placeholder
    concern: "Flat, Lifeless Hair",
    title: "Incredible volume",
    quote: '"The round volumising brush attachment gives me the perfect 90s blowout every single time with zero effort."',
    name: "Sophie T.",
  },
];

export const reviewVideos: ReviewVideo[] = [];

// Repurposed wavelengths as attachments
export const wavelengths: Wavelength[] = [
  {
    nm: "Dry",
    name: "CONCENTRATOR",
    color: "#e2e8f0",
    description: "Focused airflow for precise styling and fast drying",
  },
  {
    nm: "Curl",
    name: "AUTO-WRAP CURLERS (L/R)",
    color: "#f87171",
    description: "Uses aerodynamic Coanda effect to attract and wrap hair",
  },
  {
    nm: "Smooth",
    name: "SMOOTHING BRUSH",
    color: "#60a5fa",
    description: "Firm bristles to smooth and control frizz-prone hair",
  },
  {
    nm: "Volume",
    name: "ROUND BRUSH",
    color: "#fbbf24",
    description: "Directs air into the hair to give body, creating tension as it dries",
  },
  {
    nm: "Define",
    name: "DIFFUSER",
    color: "#34d399",
    description: "Disperses air evenly to simulate natural drying, reducing frizz",
  },
  {
    nm: "Gentle",
    name: "GENTLE AIR",
    color: "#c084fc",
    description: "Diffuses the air, creating a gentle, cooler airflow for fine hair",
  },
];

export const comparison = {
  intro: "Professional performance, without the professional price tag.",
  columns: [
    { label: "Muuhu Hair Dryer", price: "£149", featured: true },
    { label: "Dyson Airwrap", price: "£479" },
    { label: "Shark FlexStyle", price: "£269" },
  ],
  rows: [
    ["Attachments Included", "7", "6", "5"],
    ["Motor Speed", "110,000 RPM", "110,000 RPM", "Undisclosed"],
    ["Auto-Wrap Curlers", "Yes (Left & Right)", "Yes (Bi-directional)", "Yes (Left & Right)"],
    ["Ionic Technology", "200M+ Negative Ions", "Yes", "Yes"],
    ["Weight", "~600g", "660g", "700g"],
    ["Warranty", "1 Year", "2 Years", "2 Years"],
  ],
};

export const touchTech = [
  {
    title: "One-Click Attachments",
    body: "Switch between drying, curling, and smoothing in seconds with the magnetic quick-release system.",
  },
  {
    title: "Lightweight Balance",
    body: "The motor is placed in the handle for optimal balance, reducing arm strain during styling.",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "Is it really as powerful as a Dyson?",
    answer: "Yes! The Muuhu Hair Dryer features a 110,000 RPM brushless motor, exactly the same specification as the leading £300+ competitors, delivering ultra-fast drying times.",
  },
  {
    question: "Does it come with a UK plug?",
    answer: "Absolutely. All our units are designed specifically for the UK market and come fitted with a standard UK 3-pin plug (220V).",
  },
  {
    question: "Will it damage my hair?",
    answer: "No. It uses intelligent heat distribution and 200 million negative ions to dry hair quickly via high-speed airflow rather than extreme heat, protecting your hair's natural shine.",
  },
  {
    question: "How long does shipping take?",
    answer: "We offer free tracked shipping across the UK. Orders are typically delivered within 2-4 business days.",
  },
];

export const expertVideo = {
  poster: productAsset("02-new-year-new-hair.jpg"),
  src: "/media/products/buudy-led-mask/videos/Buudy Dermatologists Video.webm",
};
