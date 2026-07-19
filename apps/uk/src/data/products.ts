import { market } from "@/lib/market";
import { productAsset } from "@/lib/media";
import type { Product } from "@/types/product";

export const muuhuHairDryer: Product = {
  id: "muuhu-hair-dryer",
  sku: "MUUHU-HD-7IN1",
  slug: "muuhu-hair-dryer",
  template: "mask", // reuse the detailed product template structure
  name: "Muuhu Hair Dryer",
  heroTitle: "Muuhu",
  heroEmphasis: "Hair Dryer",
  shortDescription:
    "Professional 7-in-1 high speed styling system with 110,000 RPM brushless motor. Dry, curl, straighten, and volumise with one device.",
  description:
    "Salon-grade hair styling reimagined for UK homes. The Muuhu Hair Dryer combines a 110,000 RPM brushless motor, ionic technology with 200 million negative ions, 7 interchangeable attachments, and intelligent heat control — all in one lightweight device.",
  seoTitle: "Best Hair Dryer UK | Muuhu High Speed Styler",
  seoDescription:
    "Shop the Muuhu Hair Dryer in the UK: 110,000 RPM motor, ionic frizz control, 7 styling attachments, professional results at home. Free UK delivery.",
  currency: market.currency,
  priceCents: 14900,
  compareAtCents: 29900,
  rating: 4.9,
  reviewCount: 16000,
  customerCount: "16,000+",
  promoCode: "TBD",
  promoLabel: "£10 off applied",
  highlights: [
    "Dries hair in half the time without heat damage",
    "Banishes frizz for a silky, smooth finish",
    "Achieve a bouncy, salon-quality blowout at home"
  ],
  cartImage: productAsset("00-travel-friendly-styler.webp"),
  gallery: [
    { src: productAsset("00-travel-friendly-styler.webp"), alt: "Muuhu Hair Dryer" },
    { src: productAsset("01-amazing-hairstyles.webp"), alt: "Amazing hairstyles with Muuhu Hair Dryer" },
    { src: productAsset("02-new-year-new-hair.webp"), alt: "New year, new hair, new you!" },
    { src: productAsset("03-before-after.webp"), alt: "Before & After using Muuhu" },
    { src: productAsset("04-hairluxe.webp"), alt: "Once you try the hairluxe, there is no turning back" },
    { src: productAsset("05-coanda-effect.webp"), alt: "Coanda effect in action" },
    { src: productAsset("06-holiday-gift.webp"), alt: "Holiday gift packaging" },
    { src: productAsset("07-prep-hair.webp"), alt: "Prep hair before styling" },
    { src: productAsset("08-curling-wand.webp"), alt: "Curling wand attachment" },
    // { src: productAsset("09-muuhu-high-speed-hair-dryer.png"), alt: "Muuhu High Speed Hair Dryer" },
    // { src: productAsset("10-muuhu-ionic-hair-dryer.png"), alt: "Muuhu Ionic Hair Dryer" },
    // { src: productAsset("11-muuhu-hair-dryer-attachments.png"), alt: "Muuhu Hair Dryer Attachments" },
    // { src: productAsset("12-muuhu-salon-quality-blowout.png"), alt: "Muuhu Salon Quality Blowout" },
    // { src: productAsset("13-muuhu-fast-drying-hair-dryer.png"), alt: "Muuhu Fast Drying Hair Dryer" },
  ],
  specs: [
    { label: "Motor", value: "110,000 RPM High-Speed Brushless DC" },
    { label: "Wattage", value: "1,400W" },
    { label: "Ionic Technology", value: "200M+ Negative Ions" },
    { label: "Heat Settings", value: "3 (Cool / Warm / Hot)" },
    { label: "Speed Settings", value: "2 + Cool Shot" },
    { label: "Airflow Speed", value: "20–26 m/s" },
    { label: "Noise Level", value: "Low noise (~65dB)" },
    { label: "Weight", value: "~600g" },
    { label: "Voltage", value: "220V (UK Plug)" },
    { label: "Attachments", value: "7 included" },
  ],
  faqs: [
    {
      question: "What are the 7 attachments included?",
      answer: "It includes a concentrator nozzle, diffuser, smoothing brush, round volumising brush, two automatic curling barrels (left/right), and a gentle air attachment for fine hair.",
    },
    {
      question: "Does it come with a UK plug?",
      answer: "Absolutely. All our units are designed specifically for the UK market and come fitted with a standard UK 3-pin plug (220V).",
    },
    {
      question: "Is it really as powerful as a Dyson?",
      answer: "Yes! The Muuhu Hair Dryer features a 110,000 RPM brushless motor, exactly the same specification as the leading $300+ competitors, delivering ultra-fast drying times.",
    },
    {
      question: "Will it damage my hair?",
      answer: "No. It uses intelligent heat distribution and 200 million negative ions to dry hair quickly via high-speed airflow rather than extreme heat, protecting your hair's natural shine.",
    },
    {
      question: "Do you offer a guarantee?",
      answer: "Yes, every Muuhu Hair Dryer comes with a full 1-year warranty and a 30-day money-back guarantee.",
    },
  ],
  gifts: [
    {
      id: "travel-case",
      name: "Luxury Travel Case",
      valueCents: 4500,
      image: productAsset("00-travel-friendly-styler.webp")
    },
    {
      id: "muuhu-comb",
      name: "Muuhu Comb",
      valueCents: 8900,
      link: "/products/muuhu-comb",
      image: "/images/products/muuhu-comb/muuhu_10.webp"
    },
    {
      id: "skincare-guide",
      name: "Haircare E-book",
      valueCents: 2900,
      image: "/images/products/muuhu-hair-dryer/muuhu_ebook_3rd_render.webp"
    }
  ],
  included: [
    { label: "L-Shape Base Unit", quantity: 1, image: "/images/products/muuhu-hair-dryer/attachments/cg_base.png" },
    { label: "Right Auto-Wrap Curler", quantity: 1, image: "/images/products/muuhu-hair-dryer/attachments/cg_right.png" },
    { label: "Left Auto-Wrap Curler", quantity: 1, image: "/images/products/muuhu-hair-dryer/attachments/cg_left.png" },
    { label: "Smoothing Brush", quantity: 1, image: "/images/products/muuhu-hair-dryer/attachments/cg_smoothing.png" },
    { label: "Round Volumising Brush", quantity: 1, image: "/images/products/muuhu-hair-dryer/attachments/cg_round.png" },
    { label: "Concentrator Nozzle", quantity: 1, image: "/images/products/muuhu-hair-dryer/attachments/cg_concentrator.png" },
    { label: "Diffuser", quantity: 1, image: "/images/products/muuhu-hair-dryer/attachments/cg_diffuser.png" },
    { label: "Storage Case", quantity: 1, image: "/images/products/muuhu-hair-dryer/attachments/cg_storage_case.png" },
    { label: "User Manual", quantity: 1, image: "/images/products/muuhu-hair-dryer/attachments/cg_user_manual.png" },
  ],
  badges: ["CE Certified", "UKCA Approved", "RoHS Compliant", "1-Year Warranty"],
};

export const muuhuComb: Product = {
  id: "muuhu-comb",
  sku: "MUUHU-COMB-01",
  slug: "muuhu-comb",
  template: "torch", 
  name: "Muuhu Comb",
  heroTitle: "Muuhu",
  heroEmphasis: "Comb",
  shortDescription: "A revolutionary 3-in-1 Scalp Hair Growth Therapy Comb featuring targeted red light therapy, micro-vibration massage, and an integrated liquid applicator.",
  description: "Unlock thicker, healthier hair with the Muuhu Comb. This intelligent therapy brush delivers 650nm red light to stimulate follicles, soothing micro-vibrations to boost circulation, and a precise oil applicator for maximum serum absorption without the greasy finish.",
  seoTitle: "Muuhu Scalp & Hair Growth Therapy Comb | Red Light & Massage",
  seoDescription: "Revitalize your hair with the Muuhu Hair Growth Therapy Comb. Features red light therapy, micro-vibrations, and essential oil applicator for optimal scalp health.",
  currency: market.currency,
  priceCents: 8900,
  compareAtCents: 12900,
  rating: 4.9,
  reviewCount: 16000,
  customerCount: "16,000+",
  promoCode: "FREEGIFT",
  promoLabel: "Free with Hair Dryer",
  highlights: [
    "Stimulates dormant follicles for noticeably thicker hair",
    "Soothes dry, itchy scalp with relaxing micro-vibrations",
    "Delivers serums deep to the roots without greasy hair"
  ],
  cartImage: "/images/products/muuhu-comb/muuhu-hair-growth-therapy-comb-hero.webp",
  gallery: [
    { src: "/images/products/muuhu-comb/muuhu-hair-growth-therapy-comb-hero.webp", alt: "Muuhu Hair Growth Therapy Comb" },
    { src: "/images/products/muuhu-comb/muuhu-scalp-massager-red-light.webp", alt: "Scalp Massager Red Light Therapy" },
    { src: "/images/products/muuhu-comb/muuhu-essential-oil-applicator-comb.webp", alt: "Essential Oil Applicator Comb" },
    { src: "/images/products/muuhu-comb/muuhu-vibrating-scalp-therapy.webp", alt: "Vibrating Scalp Therapy" },
    { src: "/images/products/muuhu-comb/muuhu-hair-growth-comb-waterproof.webp", alt: "Waterproof Design" },
    { src: "/images/products/muuhu-comb/muuhu-red-light-follicle-stimulation.webp", alt: "Red Light Follicle Stimulation" },
    { src: "/images/products/muuhu-comb/muuhu-comb-liquid-tank.webp", alt: "Liquid Tank Applicator" },
    { src: "/images/products/muuhu-comb/muuhu-comb-charging-usb.webp", alt: "USB Charging" },
    { src: "/images/products/muuhu-comb/muuhu-therapy-brush-results.webp", alt: "Therapy Brush Results" },
    { src: "/images/products/muuhu-comb/muuhu-scalp-massage-brush-premium.webp", alt: "Premium Scalp Massage Brush" },
    { src: "/images/products/muuhu-comb/muuhu-hair-growth-comb-features.webp", alt: "Hair Growth Comb Features" },
    { src: "/images/products/muuhu-comb/muuhu-therapy-comb-lifestyle.webp", alt: "Therapy Comb Lifestyle" },
    { src: "/images/products/muuhu-comb/muuhu-scalp-care-routine.webp", alt: "Scalp Care Routine" },
    { src: "/images/products/muuhu-comb/muuhu-hair-growth-comb-close-up.webp", alt: "Hair Growth Comb Close Up" },
    { src: "/images/products/muuhu-comb/muuhu-red-light-therapy-benefits.webp", alt: "Red Light Therapy Benefits" },
    { src: "/images/products/muuhu-comb/muuhu-premium-haircare-tool.webp", alt: "Premium Haircare Tool" },
    { src: "/images/products/muuhu-comb/muuhu-comb-before-after-results.webp", alt: "Comb Before After Results" },
    { src: "/images/products/muuhu-comb/muuhu-comb-packaging-box.webp", alt: "Comb Packaging Box" }
  ],
  specs: [
    { label: "Therapy Type", value: "650nm Red Light & Micro-vibration" },
    { label: "Applicator", value: "Integrated Liquid Tank with Roller Teeth" },
    { label: "Waterproof Rating", value: "IPX5" },
    { label: "Battery", value: "USB Rechargeable" },
    { label: "Usage", value: "Suitable for all hair types" },
  ],
  faqs: [
    {
      question: "Can I use it with any hair serum or oil?",
      answer: "Yes, the integrated liquid tank is designed to work with most essential oils, minoxidil, and hair serums. The roller teeth distribute the liquid evenly without greasing the hair.",
    },
    {
      question: "How often should I use the red light therapy?",
      answer: "We recommend using the Muuhu Comb for 10-15 minutes a day, 3-4 times a week for optimal follicle stimulation and scalp health.",
    },
    {
      question: "Is it waterproof?",
      answer: "The comb features an IPX5 waterproof design, meaning you can easily rinse the comb teeth and liquid tank under running water after use. Do not submerge the entire device.",
    },
  ],
  gifts: [],
  included: [
    { label: "Muuhu Comb Device", quantity: 1, image: "/images/products/muuhu-comb/muuhu-hair-growth-therapy-comb-hero.webp" },
    { label: "USB Charging Cable", quantity: 1, image: "/images/products/muuhu-comb/muuhu-comb-charging-usb.webp" },
    { label: "User Manual", quantity: 1, image: "/images/products/muuhu-comb/muuhu-comb-packaging-box.webp" },
  ],
  badges: ["CE Certified", "Red Light Therapy", "Micro-Vibration"],
};

export const products: Product[] = [muuhuHairDryer, muuhuComb];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export const productsById = products.reduce((acc, product) => {
  acc[product.id] = product;
  return acc;
}, {} as Record<string, Product>);

export type { Product };
