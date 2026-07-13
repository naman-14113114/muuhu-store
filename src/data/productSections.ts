import { productAsset, productMediaAsset } from "@/lib/media";

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
  poster?: string;
  src: string;
  fallbackSrc?: string;
  fullSrc?: string;
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
    image: productAsset("01-sagging-cheeks.webp"),
    concern: "Sagging Cheeks",
    title: "Best investment ever",
    quote:
      '"I have noticed a significant reduction in the sagging around my cheeks and jawline."',
    name: "Donna P.",
  },
  {
    id: "result-02",
    image: productAsset("02-fine-lines.webp"),
    concern: "Fine Lines",
    title: "IT REALLY WORKS!!",
    quote:
      '"After using for 1 month, I cannot believe the difference! Fine lines are much less noticeable."',
    name: "Jane P.",
  },
  {
    id: "result-03",
    image: productAsset("03-neck-firming.webp"),
    concern: "Neck Firming",
    title: "Incredible results",
    quote:
      '"In less than 2 months, noticed the fine lines around my eyes and mouth are much less noticeable."',
    name: "Sarah K.",
  },
  {
    id: "result-04",
    image: productAsset("04-forehead-lines.webp"),
    concern: "Forehead Lines",
    title: "Better than Botox",
    quote:
      '"Within just a few weeks, my skin started to clear up and the scars began to fade."',
    name: "Michelle L.",
  },
  {
    id: "result-05",
    image: productAsset("05-jawline-sculpting.webp"),
    concern: "Jawline Sculpting",
    title: "Defined my face!",
    quote:
      '"I never thought I would see my jawline again without surgery. This device is a total game changer."',
    name: "James D.",
  },
  {
    id: "result-06",
    image: productAsset("06-skin-radiance.webp"),
    concern: "Skin Radiance",
    title: "Literal Glow Up",
    quote:
      '"My skin looks so much more radiant and healthy. I have even stopped wearing heavy foundation!"',
    name: "Karen W.",
  },
  {
    id: "result-07",
    image: productAsset("07-under-eye-bags.webp"),
    concern: "Under Eye Bags",
    title: "Eyes look refreshed",
    quote:
      '"The puffiness under my eyes has vanished. I look like I have actually had 8 hours of sleep!"',
    name: "Linda S.",
  },
  {
    id: "result-08",
    image: productAsset("08-skin-texture.webp"),
    concern: "Skin Texture",
    title: "Smooth as silk",
    quote:
      '"The overall texture of my skin has improved immensely. It feels incredibly soft and looks smooth."',
    name: "Jennifer H.",
  },
];

export const reviewVideos: ReviewVideo[] = [
  {
    id: "review-01",
    src: "/videos/hair-dryer/Hair Dryer video 1-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Reviews Video 1.mp4",
  },
  {
    id: "review-02",
    src: "/videos/hair-dryer/Hair Dryer video 2-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Reviews Video 2.mp4",
  },
  {
    id: "review-03",
    src: "/videos/hair-dryer/Hair Dryer video 3-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Reviews Video 3.mp4",
  },
  {
    id: "review-04",
    src: "/videos/hair-dryer/Hair Dryer video 4-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Reviews Video 4.mp4",
  },
  {
    id: "review-05",
    src: "/videos/hair-dryer/Hair Dryer video 5-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Reviews Video 5.mp4",
  },
  {
    id: "review-06",
    src: "/videos/hair-dryer/Hair Dryer 6-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Reviews Video 6.mp4",
  },
  {
    id: "review-07",
    src: "/videos/hair-dryer/Hair Dryer video 7-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Video 7.mp4",
  },
  {
    id: "review-08",
    src: "/videos/hair-dryer/Hair Dryer 8-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Video 8.mp4",
  },
  {
    id: "review-09",
    src: "/videos/hair-dryer/Hair Dryer 9-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Video 9.mp4",
  },
  {
    id: "review-11",
    src: "/videos/hair-dryer/Hair Dryer 11-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Video 11.mp4",
  },
];

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


