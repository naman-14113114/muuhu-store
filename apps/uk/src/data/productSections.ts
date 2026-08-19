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
  fullName?: string;
  age?: number;
  routine?: string;
  experience?: string;
  hairType?: string;
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
    kicker: "Ultra-Fast 1,600W Drying",
    body: "Experience rapid drying times with a powerful 1,600W high-speed motor. The intelligent aerodynamic design drives moisture from the hair rapidly for effortless styling.",
  },
  {
    title: "3 Temperature Settings and 3 Speed Settings",
    kicker: "Precision Styling",
    body: "Choose from 3 distinct temperature and 3 speed control settings to perfectly match your hair type and desired style, ensuring you get flawless results every single time.",
  },
  {
    title: "Effortless Curls & Waves",
    kicker: "The Coanda Effect",
    body: "With 16MM-20MM barrel diameters, the aerodynamic Coanda effect automatically wraps your hair to create bouncy curls, loose waves, and sleek straight looks in under 10 minutes.",
  },
];

export const combFeatures: Feature[] = [
  {
    title: "Tri-Color Light Therapy Modes",
    kicker: "Targeted Phototherapy Spectrum",
    body: "Red light (650–680nm) strengthens hair roots, blue light (430–450nm) heals damaged follicles and balances scalp oil, and purple light (380–420nm) provides dual-wave scalp rejuvenation.",
  },
  {
    title: "6 EMS Microcurrent Teeth",
    kicker: "Secondary Muscle Activation",
    body: "Generates gentle bio-electric microcurrents across 3 adjustable intensity levels to stimulate dermal papilla cells and enhance localized microcirculation.",
  },
  {
    title: "3 High-Frequency Vibration Speeds",
    kicker: "10,000 ± 2,000 VPM Massage",
    body: "Acoustic micro-vibration soothes daily scalp tension, stimulates cell metabolism, and prepares roots for optimal formula absorption.",
  },
  {
    title: "8ml Detachable Liquid Tank",
    kicker: "Precision Dropper & Easy Rinse",
    body: "Separate 8ml reservoir allows effortless filling with hair oils, minoxidil, or growth serums, and detaches for quick rinsing with water.",
  },
  {
    title: "6 Elastic Rolling Beads Teeth",
    kicker: "Targeted Zero-Mess Dispensing",
    body: "Spring-loaded rollerball teeth part hair and release serum directly onto scalp roots upon gentle pressure without making hair greasy.",
  },
  {
    title: "8 Soft Silicone Massage Points",
    kicker: "Gentle Scratch-Free Care",
    body: "Multi-contact silicone points provide a comforting, non-irritating acupoint massage for all scalp types.",
  },
  {
    title: "Stand-Up Flat Bottom Design",
    kicker: "Hygienic Countertop Storage",
    body: "Thoughtful self-standing base keeps the comb upright on your vanity or bathroom counter, preventing spills and keeping your space tidy.",
  },
];

export const scalpProFeatures: Feature[] = [
  {
    title: "Tri-Color Light Therapy Modes",
    kicker: "Targeted Phototherapy Spectrum",
    body: "Red light (650–680nm) strengthens hair roots, blue light (430–450nm) heals damaged follicles and balances scalp oil, and purple light (380–420nm) provides dual-wave scalp rejuvenation.",
  },
  {
    title: "6 EMS Microcurrent Teeth",
    kicker: "Secondary Muscle Activation",
    body: "Generates gentle bio-electric microcurrents across 3 adjustable intensity levels to stimulate dermal papilla cells and enhance localized microcirculation.",
  },
  {
    title: "3 High-Frequency Vibration Speeds",
    kicker: "10,000 ± 2,000 VPM Massage",
    body: "Acoustic micro-vibration soothes daily scalp tension, stimulates cell metabolism, and prepares roots for optimal formula absorption.",
  },
  {
    title: "8ml Detachable Liquid Tank",
    kicker: "Precision Dropper & Easy Rinse",
    body: "Separate 8ml reservoir allows effortless filling with hair oils, minoxidil, or growth serums, and detaches for quick rinsing with water.",
  },
  {
    title: "6 Elastic Rolling Beads Teeth",
    kicker: "Targeted Zero-Mess Dispensing",
    body: "Spring-loaded rollerball teeth part hair and release serum directly onto scalp roots upon gentle pressure without making hair greasy.",
  },
  {
    title: "8 Soft Silicone Massage Points",
    kicker: "Gentle Scratch-Free Care",
    body: "Multi-contact silicone points provide a comforting, non-irritating acupoint massage for all scalp types.",
  },
  {
    title: "Stand-Up Flat Bottom Design",
    kicker: "Hygienic Countertop Storage",
    body: "Thoughtful self-standing base keeps the comb upright on your vanity or bathroom counter, preventing spills and keeping your space tidy.",
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
    image: "/images/products/muuhu-hair-dryer/before-after-cards/image_1.webp",
    concern: "Fast Drying",
    title: "Cuts drying time in half",
    quote: '"I have thick hair and it usually takes 40 minutes to dry. With the Muuhu dryer, I am done in 15 minutes with zero heat damage."',
    name: "Sarah M.",
    fullName: "Sarah Mitchell",
    age: 28,
    routine: "L-Shape Base on medium heat and high airflow for 10 mins.",
    experience: "The 110,000 RPM motor is incredibly powerful yet quiet. My hair feels noticeably softer and healthier because it's not being fried by extreme heat.",
    hairType: "Thick & Wavy"
  },
  {
    id: "result-02",
    image: "/images/products/muuhu-hair-dryer/before-after-cards/image_2.webp",
    concern: "Frizz Control",
    title: "Sleek and perfectly straight",
    quote: '"The smoothing brush is a miracle worker. It tames my morning frizz completely and leaves a salon-quality shine."',
    name: "Jessica T.",
    fullName: "Jessica Taylor",
    age: 34,
    routine: "Glide the Smoothing Brush through sections on high heat.",
    experience: "This brush smooths and straightens while drying, eliminating the need for flat irons. The bristles perfectly tension the hair for a flawless, sleek finish.",
    hairType: "Frizzy & Coarse"
  },
  {
    id: "result-03",
    image: "/images/products/muuhu-hair-dryer/before-after-cards/image_3.webp",
    concern: "Flat, Lifeless Hair",
    title: "Incredible bounce & volume",
    quote: '"I finally achieved that 90s blowout look! It gives my roots so much lift and makes my hair look incredibly thick."',
    name: "Elena R.",
    fullName: "Elena Rodriguez",
    age: 26,
    routine: "Round Volumising Brush at the roots, lifting upwards.",
    experience: "Wrapping it around this volumising brush creates incredible body and bounce. I literally look like I just stepped out of a professional salon every single day.",
    hairType: "Fine & Flat"
  },
  {
    id: "result-04",
    image: "/images/products/muuhu-hair-dryer/before-after-cards/image_5.webp",
    concern: "Perfect Bouncy Curls",
    title: "Effortless Hollywood waves",
    quote: '"The Coanda technology wraps my hair automatically! I have never been able to curl my hair this easily."',
    name: "Chloe B.",
    fullName: "Chloe Bennett",
    age: 24,
    routine: "Left Curling Barrel on damp hair for 10s, then cool shot.",
    experience: "The aerodynamic airflow automatically wraps my hair around the barrel perfectly every time. It creates gorgeous, face-framing curls that hold for days.",
    hairType: "Medium & Straight"
  },
  {
    id: "result-05",
    image: "/images/products/muuhu-hair-dryer/before-after-cards/image_7.webp",
    concern: "Symmetrical Styling",
    title: "Flawless uniform curls",
    quote: '"Having dedicated left and right barrels makes symmetrical styling so simple. My curls always look professional and balanced."',
    name: "Hannah K.",
    fullName: "Hannah Kelly",
    age: 31,
    routine: "Right Curling Barrel for the right side, Left for the left.",
    experience: "Switching between directional barrels ensures both sides of my hair frame my face evenly. It is foolproof even if you are not great with curling irons.",
    hairType: "Fine & Wavy"
  },
  {
    id: "result-06",
    image: "/images/products/muuhu-hair-dryer/before-after-cards/image_8.webp",
    concern: "Defined Natural Curls",
    title: "Zero frizz, maximum definition",
    quote: '"The diffuser attachment completely changed my curl routine. My natural curls are bouncy, defined, and completely frizz-free."',
    name: "Maya P.",
    fullName: "Maya Patel",
    age: 29,
    routine: "Diffuser on low heat, cupping curls upwards towards scalp.",
    experience: "Even heat distribution dries curls gently without disturbing the natural curl pattern. It cuts my routine in half without drying out my hair.",
    hairType: "Curly / Type 3A"
  }
];

export const reviewVideos: ReviewVideo[] = [
  {
    id: "review-01",
    poster: "/videos/hair-dryer/posters/muuhu-airpro-review-video-01-poster.jpg",
    src: "/videos/hair-dryer/Hair Dryer 1-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Video 1.mp4",
  },
  {
    id: "review-02",
    poster: "/videos/hair-dryer/posters/muuhu-airpro-review-video-02-poster.jpg",
    src: "/videos/hair-dryer/Hair Dryer 2-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Video 2.mp4",
  },
  {
    id: "review-03",
    poster: "/videos/hair-dryer/posters/muuhu-airpro-review-video-03-poster.jpg",
    src: "/videos/hair-dryer/Hair Dryer 3-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Video 3.mp4",
  },
  {
    id: "review-04",
    poster: "/videos/hair-dryer/posters/muuhu-airpro-review-video-04-poster.jpg",
    src: "/videos/hair-dryer/Hair Dryer 4-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Video 4.mp4",
  },
  {
    id: "review-05",
    poster: "/videos/hair-dryer/posters/muuhu-airpro-review-video-05-poster.jpg",
    src: "/videos/hair-dryer/Hair Dryer 5-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Video 5.mp4",
  },
  {
    id: "review-06",
    poster: "/videos/hair-dryer/posters/muuhu-airpro-review-video-06-poster.jpg",
    src: "/videos/hair-dryer/Hair Dryer 6-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Video 6.mp4",
  },
  {
    id: "review-07",
    poster: "/videos/hair-dryer/posters/muuhu-airpro-review-video-07-poster.jpg",
    src: "/videos/hair-dryer/Hair Dryer 7-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Video 7.mp4",
  },
  {
    id: "review-08",
    poster: "/videos/hair-dryer/posters/muuhu-airpro-review-video-08-poster.jpg",
    src: "/videos/hair-dryer/Hair Dryer 8-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Video 8.mp4",
  },
  {
    id: "review-09",
    poster: "/videos/hair-dryer/posters/muuhu-airpro-review-video-09-poster.jpg",
    src: "/videos/hair-dryer/Hair Dryer 9-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Video 9.mp4",
  },
  {
    id: "review-11",
    poster: "/videos/hair-dryer/posters/muuhu-airpro-review-video-11-poster.jpg",
    src: "/videos/hair-dryer/Hair Dryer 11-shorts.mp4",
    fullSrc: "/videos/hair-dryer/Hair Dryer Video 11.mp4",
  },
];

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
  intro: "Check the difference yourself",
  columns: [
    { label: "Muuhu AirPro", price: "£129", featured: true },
    { label: "Dyson Supersonic", price: "£429" },
    { label: "Shark SpeedStyle", price: "£199" },
    { label: "GHD Air", price: "£199" },
  ],
  rows: [
    ["Attachments Included", "7", "5", "4", "1"],
    ["110,000 RPM Motor", "Yes", "Yes", "-", "-"],
    ["Weight", "475g", "660g", "700g", "823g"],
    ["Ionic Technology", "Yes", "Yes", "Yes", "Yes"],
    ["Low noise (65 dB)", "Yes", "-", "-", "-"],
    ["App Companion", "Yes", "-", "-", "-"],
    ["Intelligent Heat Control", "Yes", "Yes", "-", "-"],
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
    answer: "The Muuhu AirPro features a 110,000 RPM brushless motor, matching the stated motor speed of leading £300+ competitors and delivering high-speed airflow.",
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
  poster: productAsset("02-new-year-new-hair.webp"),
  src: "/media/products/buudy-led-mask/videos/Buudy Dermatologists Video.webm",
};
