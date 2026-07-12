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
  reviewCount: 2400,
  customerCount: "2,400+",
  promoCode: "TBD",
  promoLabel: "£10 off applied",
  cartImage: productAsset("00-travel-friendly-styler.jpg"),
  gallery: [
    { src: productAsset("00-travel-friendly-styler.jpg"), alt: "Muuhu Hair Dryer" },
    { src: productAsset("01-amazing-hairstyles.jpg"), alt: "Amazing hairstyles with Muuhu Hair Dryer" },
    { src: productAsset("02-new-year-new-hair.jpg"), alt: "New year, new hair, new you!" },
    { src: productAsset("03-before-after.jpg"), alt: "Before & After using Muuhu" },
    { src: productAsset("04-hairluxe.jpg"), alt: "Once you try the hairluxe, there is no turning back" },
    { src: productAsset("05-coanda-effect.jpg"), alt: "Coanda effect in action" },
    { src: productAsset("06-holiday-gift.jpg"), alt: "Holiday gift packaging" },
    { src: productAsset("07-prep-hair.jpg"), alt: "Prep hair before styling" },
    { src: productAsset("08-curling-wand.jpg"), alt: "Curling wand attachment" },
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
      question: "Is it really as powerful as a Dyson?",
      answer: "Yes! The Muuhu Hair Dryer features a 110,000 RPM brushless motor, exactly the same specification as the leading £300+ competitors, delivering ultra-fast drying times.",
    },
    {
      question: "Does it come with a UK plug?",
      answer: "Absolutely. All our units are designed specifically for the UK market and come fitted with a standard UK 3-pin plug (220V).",
    },
    {
      question: "What are the 7 attachments included?",
      answer: "It includes a concentrator nozzle, diffuser, smoothing brush, round volumising brush, two automatic curling barrels (left/right), and a gentle air attachment for fine hair.",
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
      image: productAsset("00-travel-friendly-styler.jpg")
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

export const products: Product[] = [muuhuHairDryer];

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
