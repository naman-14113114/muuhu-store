import { market } from "@/lib/market";
import { productAsset } from "@/lib/media";
import type { Product } from "@/types/product";

export const muuhuHairDryer: Product = {
  id: "muuhu-hair-dryer",
  sku: "MUUHU-HD-7IN1",
  slug: "muuhu-hair-dryer",
  template: "mask", // reuse the detailed product template structure
  name: "Muuhu AirPro",
  heroTitle: "Muuhu",
  heroEmphasis: "AirPro",
  shortDescription:
    "Professional 7-in-1 high speed styling system with 110,000 RPM brushless motor. Dry, curl, straighten, and volumise with one device.",
  description:
    "Salon-grade hair styling reimagined for UK homes. The Muuhu AirPro combines a 110,000 RPM brushless motor, ionic technology with 200 million negative ions, 7 interchangeable attachments, and intelligent heat control — all in one lightweight device.",
  seoTitle: "Muuhu AirPro | 7-in-1 High-Speed Hair Styler UK",
  seoDescription:
    "Shop the Muuhu AirPro in the US: 110,000 RPM motor, ionic frizz control, 7 styling attachments, professional results at home. Free UK delivery.",
  currency: market.currency,
  priceCents: 12900,
  compareAtCents: 25900,
  rating: 4.9,
  reviewCount: 16000,
  customerCount: "16,000+",
  promoCode: "AUTO",
  promoLabel: "£10 off applied",
  highlights: [
    "Dries hair in half the time without heat damage",
    "Banishes frizz for a silky, smooth finish",
    "Achieve a bouncy, salon-quality blowout at home",
  ],
  cartImage: "/images/products/muuhu-hair-dryer/muuhu.jpg",
  gallery: [
    {
      src: productAsset("00-travel-friendly-styler-v2.webp"),
      alt: "Muuhu AirPro",
    },
    // {
    //   src: productAsset("26.webp"),
    //   alt: "Muuhu AirPro",
    // },
    // {
    //   src: productAsset("25.webp"),
    //   alt: "Muuhu AirPro",
    // },
    {
      src: productAsset("01-amazing-hairstyles.webp"),
      alt: "Amazing hairstyles with Muuhu AirPro",
    },
    {
      src: productAsset("02-new-year-new-hair.webp"),
      alt: "New year, new hair, new you!",
    },
    {
      src: productAsset("03-before-after.webp"),
      alt: "Before & After using Muuhu",
    },
    {
      src: productAsset("04-hairluxe.webp"),
      alt: "Once you try the hairluxe, there is no turning back",
    },
    {
      src: productAsset("05-coanda-effect.webp"),
      alt: "Coanda effect in action",
    },
    {
      src: productAsset("06-holiday-gift.webp"),
      alt: "Holiday gift packaging",
    },
    { src: productAsset("07-prep-hair.webp"), alt: "Prep hair before styling" },
    {
      src: productAsset("08-curling-wand.webp"),
      alt: "Curling wand attachment",
    },
    // { src: productAsset("09-muuhu-high-speed-hair-dryer.png"), alt: "Muuhu High Speed Hair Dryer" },
    // { src: productAsset("10-muuhu-ionic-hair-dryer.png"), alt: "Muuhu Ionic Hair Dryer" },
    // { src: productAsset("11-muuhu-hair-dryer-attachments.png"), alt: "Muuhu AirPro Attachments" },
    // { src: productAsset("12-muuhu-salon-quality-blowout.png"), alt: "Muuhu Salon Quality Blowout" },
    // { src: productAsset("13-muuhu-fast-drying-hair-dryer.png"), alt: "Muuhu Fast Drying Hair Dryer" },
  ],
  specs: [
    { label: "Motor", value: "110,000 RPM High-Speed Brushless DC" },
    { label: "Wattage", value: "1,600W" },
    { label: "Ionic Technology", value: "200M+ Negative Ions" },
    { label: "Heat Settings", value: "3" },
    { label: "Speed Settings", value: "3" },
    { label: "Airflow Speed", value: "20-26 m/s" },
    { label: "Noise Level", value: "65 dB" },
    { label: "Weight", value: "475g" },
    { label: "Voltage", value: "220-240V" },
    { label: "Attachments", value: "7 included" },
  ],
  faqs: [
    {
      question: "What are the 7 attachments included?",
      answer:
        "It includes a concentrator nozzle, diffuser, smoothing brush, round volumising brush, two automatic curling barrels (left/right), and a gentle air attachment for fine hair.",
    },
    {
      question: "Does it come with a UK plug?",
      answer:
        "Absolutely. All our units are designed specifically for the UK market and come fitted with a standard UK 3-pin plug (220V).",
    },
    {
      question: "Is it really as powerful as a Dyson?",
      answer:
        "Yes! The Muuhu AirPro features a 110,000 RPM brushless motor, exactly the same specification as the leading £300+ competitors, delivering ultra-fast drying times.",
    },
    {
      question: "Will it damage my hair?",
      answer:
        "No. It uses intelligent heat distribution and 200 million negative ions to dry hair quickly via high-speed airflow rather than extreme heat, protecting your hair's natural shine.",
    },
    {
      question: "Do you offer a guarantee?",
      answer:
        "Yes, every Muuhu AirPro comes with a full 2-year warranty and a 90-day money-back guarantee.",
    },
  ],
  gifts: [
    {
      id: "travel-case",
      name: "Premium Packaging",
      valueCents: 3500,
      link: "/pages/premium-packaging",
      image: productAsset("muuhu-luxury-case-v2.webp"),
    },
    {
      id: "muuhu-comb",
      name: "Muuhu ScalpPro",
      valueCents: 7900,
      link: "/products/muuhu-comb",
      image: "/images/products/muuhu-comb/muuhu-scalppro-bonus.webp",
    },
    {
      id: "skincare-guide",
      name: "Haircare E-book",
      valueCents: 1500,
      link: "/pages/haircare-ebook",
      image: productAsset("muuhu-haircare-ebook-gift.webp"),
    },
  ],
  included: [
    {
      label: "L-Shape Base Unit",
      quantity: 1,
      image: "/images/products/muuhu-hair-dryer/attachments/cg_base_right.png",
    },
    {
      label: "Right Auto-Wrap Curler",
      quantity: 1,
      image: "/images/products/muuhu-hair-dryer/attachments/cg_right.png",
    },
    {
      label: "Left Auto-Wrap Curler",
      quantity: 1,
      image: "/images/products/muuhu-hair-dryer/attachments/cg_left.png",
    },
    {
      label: "Smoothing Brush",
      quantity: 1,
      image: "/images/products/muuhu-hair-dryer/attachments/cg_smoothing.png",
    },
    {
      label: "Round Volumising Brush",
      quantity: 1,
      image: "/images/products/muuhu-hair-dryer/attachments/cg_round.png",
    },
    {
      label: "Concentrator Nozzle",
      quantity: 1,
      image:
        "/images/products/muuhu-hair-dryer/attachments/muuhu-airpro-concentrator-nozzle.png",
    },
    {
      label: "Diffuser",
      quantity: 1,
      image: "/images/products/muuhu-hair-dryer/attachments/cg_diffuser.png",
    },
    {
      label: "Premium Packaging",
      quantity: 1,
      image:
        "/images/products/muuhu-hair-dryer/attachments/luxury_case_icon.png",
    },
    {
      label: "User Manual",
      quantity: 1,
      image: "/images/products/muuhu-hair-dryer/attachments/cg_user_manual.png",
    },
  ],
  badges: [
    "CE Certified",
    "UKCA Approved",
    "RoHS Compliant",
    "2-Year Warranty",
  ],
};

export const muuhuComb: Product = {
  id: "muuhu-comb",
  sku: "MUUHU-COMB-01",
  slug: "muuhu-comb",
  template: "torch",
  name: "Muuhu ScalpPro",
  heroTitle: "Muuhu",
  heroEmphasis: "ScalpPro",
  shortDescription:
    "5-in-1 Scalp Rejuvenation Comb with Tri-Color LED therapy, EMS microcurrent, soothing vibration, and an 8ml mess-free serum applicator.",
  description:
    "Unlock thicker, healthier hair with the Muuhu ScalpPro. Engineered with targeted 650nm red, 430nm blue, and purple light therapy, 3 levels of EMS microcurrent, high-frequency micro-vibration (10,000 VPM), and 6 elastic rollerball teeth that deliver active serums directly to follicle roots without greasy residue.",
  seoTitle: "Muuhu ScalpPro | EMS Tri-Light Scalp Care & Massage US",
  seoDescription:
    "Shop Muuhu ScalpPro in the US. 5-in-1 hair growth comb featuring 3-mode LED light therapy, EMS microcurrent, vibration massage, and an 8ml detachable serum tank.",
  currency: market.currency,
  priceCents: 7900,
  compareAtCents: 15900,
  rating: 4.9,
  reviewCount: 16000,
  customerCount: "16,000+",
  promoCode: "FREEGIFT",
  promoLabel: "Free with Muuhu AirPro",
  highlights: [
    "6 Elastic rolling beads deliver serums directly to roots without grease",
    "3-Color light therapy (Red, Blue, Purple) for root strength & follicle health",
    "3 EMS intensity levels & 3 vibration speeds (10,000 VPM) soothe scalp tension",
  ],
  cartImage: "/images/products/muuhu-scalppro/muuhu_scalppro_hero.webp",
  gallery: [
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_hero.webp",
      alt: "Muuhu ScalpPro 3-in-1 Scalp Care & Massage Comb",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_lights.webp",
      alt: "Tri-Color Light Therapy (Red, Blue, Purple) & EMS Stimulation",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_tank.webp",
      alt: "5-in-1 Multifunctional Scalp Massager Technologies",
    },
    {
      src: "/images/products/muuhu-scalppro/Step-2.webp",
      alt: "Precision Serum Applicator & Essential Oil Dispensing",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_unboxing.webp",
      alt: "High-Frequency Vibration & Acupressure Multi-Contact Points",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_teeth.webp",
      alt: "Targeted Solutions for Hair Loss, Shedding & Thinning",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_standup.webp",
      alt: "Portable Scalp Care for Morning, Travel & Bedtime",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_ems.webp",
      alt: "Long-Lasting Battery & Type-C Fast Charging",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_24.webp",
      alt: "Muuhu ScalpPro Daily Styling & Care Mirror Routine",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_25.webp",
      alt: "Relaxing Evening Phototherapy Scalp Treatment",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu-comb-before-after-2.webp",
      alt: "Hygienic Free-Standing Countertop Vanity Design",
    },
  ],
  specs: [
    { label: "Model", value: "F1 Multifunctional Scalp Comb" },
    { label: "Light Therapy", value: "Red (650-680nm), Blue (430-450nm), Purple (380-420nm)" },
    { label: "EMS & Vibration", value: "3 EMS Speeds + 3 Vibration Speeds (10,000±2,000 VPM)" },
    { label: "Teeth Array", value: "6 Rolling Beads + 6 EMS Combs + 8 Silicone Combs" },
    { label: "Liquid Tank", value: "8ml Detachable Reservoir" },
    { label: "Power & Charging", value: "1.5W, DC5V Type-C Fast Charging" },
  ],
  faqs: [
    {
      question: "Can I use it with any hair serum, oil, or minoxidil?",
      answer:
        "Yes, the detachable 8ml liquid tank works seamlessly with hair oils, minoxidil, and scalp serums. The 6 elastic rolling beads dispense liquid directly onto the scalp roots upon contact without coating the hair shafts or leaving grease.",
    },
    {
      question: "How do the 3 light therapy modes work?",
      answer:
        "Red Light (650-680nm) stimulates cellular ATP and strengthens hair roots; Blue Light (430-450nm) balances scalp oil and calms irritation; Purple Light (380-420nm) provides synergistic dual-wave follicle nourishment.",
    },
    {
      question: "How do I adjust the EMS and vibration settings?",
      answer:
        "Muuhu ScalpPro offers 3 EMS microcurrent intensity levels and 3 vibration speeds (10,000 VPM). You can easily cycle through the modes using the button to match your scalp's comfort level.",
    },
    {
      question: "How do I clean the liquid tank and comb teeth?",
      answer:
        "The 8ml liquid tank is detachable. Simply remove the tank and rinse it along with the rolling teeth under warm tap water. Note: Do not submerge the charging port or power on while charging.",
    },
  ],
  gifts: [],
  included: [
    {
      label: "Muuhu ScalpPro Main Unit (White)",
      quantity: 1,
      image: "/images/products/muuhu-scalppro/muuhu_scalppro_hero.webp",
    },
    {
      label: "8ml Detachable Liquid Tank",
      quantity: 1,
      image: "/images/products/muuhu-scalppro/Step-2.webp",
    },
    {
      label: "Precision Dropper",
      quantity: 1,
      image: "/images/products/muuhu-scalppro/Step-2.webp",
    },
    {
      label: "Type-C Charging Cable",
      quantity: 1,
      image: "/images/products/muuhu-scalppro/muuhu_scalppro_ems.webp",
    },
    {
      label: "Instruction Manual",
      quantity: 1,
      image: "/images/products/muuhu-scalppro/muuhu-comb-before-after-2.webp",
    },
  ],
  badges: ["CE Certified", "Tri-Color Phototherapy", "EMS Microcurrent", "IPX5 Rinseable"],
};

export const muuhuScalpPro: Product = {
  id: "muuhu-scalppro",
  sku: "MUUHU-COMB-01",
  slug: "muuhu-scalppro",
  template: "torch",
  name: "Muuhu ScalpPro",
  heroTitle: "Muuhu",
  heroEmphasis: "ScalpPro",
  shortDescription:
    "5-in-1 Scalp Rejuvenation Comb with Tri-Color LED therapy, EMS microcurrent, soothing vibration, and an 8ml mess-free serum applicator.",
  description:
    "Unlock thicker, healthier hair with the Muuhu ScalpPro. Engineered with targeted 650nm red, 430nm blue, and purple light therapy, 3 levels of EMS microcurrent, high-frequency micro-vibration (10,000 VPM), and 6 elastic rollerball teeth that deliver active serums directly to follicle roots without greasy residue.",
  seoTitle: "Muuhu ScalpPro | EMS Tri-Light Scalp Care & Massage US",
  seoDescription:
    "Shop Muuhu ScalpPro in the US. 5-in-1 hair growth comb featuring 3-mode LED light therapy, EMS microcurrent, vibration massage, and an 8ml detachable serum tank.",
  currency: market.currency,
  priceCents: 7900,
  compareAtCents: 15900,
  rating: 4.9,
  reviewCount: 16000,
  customerCount: "16,000+",
  promoCode: "FREEGIFT",
  promoLabel: "Free with Muuhu AirPro",
  highlights: [
    "6 Elastic rolling beads deliver serums directly to roots without grease",
    "3-Color light therapy (Red, Blue, Purple) for root strength & follicle health",
    "3 EMS intensity levels & 3 vibration speeds (10,000 VPM) soothe scalp tension",
  ],
  cartImage: "/images/products/muuhu-scalppro/muuhu_scalppro_main.webp",
  gallery: [
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_main.webp",
      alt: "Muuhu ScalpPro Electric Scalp Massager Comb with Box and Accessories",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_features_callouts.webp",
      alt: "Muuhu ScalpPro Tri-Color Light, EMS & Vibration Feature Callouts",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_dimensions_specs.webp",
      alt: "Muuhu ScalpPro Ergonomic Dimensions & Technical Specifications",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_handheld_red_light.webp",
      alt: "Muuhu ScalpPro Handheld Red Light Phototherapy Treatment",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_laser_follicle_stimulation.webp",
      alt: "Muuhu ScalpPro 650nm Laser LLLT Follicle Stimulation Diagram",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_parting_serum_application.webp",
      alt: "Muuhu ScalpPro Precision Hair Parting & Scalp Serum Application",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_vibration_massage_modes.webp",
      alt: "Muuhu ScalpPro Deep Frequency Vibration Massage & Multi-Spectrum Light Modes",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_6point_roller_system.webp",
      alt: "Muuhu ScalpPro 6 Point Roller System for Even Hair Oil Distribution",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_detachable_liquid_container.webp",
      alt: "Muuhu ScalpPro Detachable Liquid Reservoir & Precision Dropper Refill",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_before_after_results.webp",
      alt: "Muuhu ScalpPro Deep Massage Before and After Shiny Hair Results",
    },
    {
      src: "/images/products/muuhu-scalppro/muuhu_scalppro_teeth_technology.webp",
      alt: "Muuhu ScalpPro 6 EMS Teeth, 8 Soft Massage Tips & 6 Roller Balls",
    },
  ],
  specs: [
    { label: "Model", value: "F1 Multifunctional Scalp Comb" },
    { label: "Light Therapy", value: "Red (650-680nm), Blue (430-450nm), Purple (380-420nm)" },
    { label: "EMS & Vibration", value: "3 EMS Speeds + 3 Vibration Speeds (10,000±2,000 VPM)" },
    { label: "Teeth Array", value: "6 Rolling Beads + 6 EMS Combs + 8 Silicone Combs" },
    { label: "Liquid Tank", value: "8ml Detachable Reservoir" },
    { label: "Power & Charging", value: "1.5W, DC5V Type-C Fast Charging" },
  ],
  faqs: [
    {
      question: "Can I use it with any hair serum, oil, or minoxidil?",
      answer:
        "Yes, the detachable 8ml liquid tank works seamlessly with hair oils, minoxidil, and scalp serums. The 6 elastic rolling beads dispense liquid directly onto the scalp roots upon contact without coating the hair shafts or leaving grease.",
    },
    {
      question: "How do the 3 light therapy modes work?",
      answer:
        "Red Light (650-680nm) stimulates cellular ATP and strengthens hair roots; Blue Light (430-450nm) balances scalp oil and calms irritation; Purple Light (380-420nm) provides synergistic dual-wave follicle nourishment.",
    },
    {
      question: "How do I adjust the EMS and vibration settings?",
      answer:
        "Muuhu ScalpPro offers 3 EMS microcurrent intensity levels and 3 vibration speeds (10,000 VPM). You can easily cycle through the modes using the button to match your scalp's comfort level.",
    },
    {
      question: "How do I clean the liquid tank and comb teeth?",
      answer:
        "The 8ml liquid tank is detachable. Simply remove the tank and rinse it along with the rolling teeth under warm tap water. Note: Do not submerge the charging port or power on while charging.",
    },
  ],
  gifts: [],
  included: [
    {
      label: "Muuhu ScalpPro Main Unit (White)",
      quantity: 1,
      image: "/images/products/muuhu-scalppro/muuhu_scalppro_hero.webp",
    },
    {
      label: "8ml Detachable Liquid Tank",
      quantity: 1,
      image: "/images/products/muuhu-scalppro/muuhu_scalppro_tank.webp",
    },
    {
      label: "Precision Dropper",
      quantity: 1,
      image: "/images/products/muuhu-scalppro/muuhu_scalppro_tank.webp",
    },
    {
      label: "Type-C Charging Cable",
      quantity: 1,
      image: "/images/products/muuhu-scalppro/muuhu_scalppro_unboxing.webp",
    },
    {
      label: "Instruction Manual",
      quantity: 1,
      image: "/images/products/muuhu-scalppro/muuhu_scalppro_unboxing.webp",
    },
  ],
  badges: ["CE Certified", "Tri-Color Phototherapy", "EMS Microcurrent", "IPX5 Rinseable"],
};

export const products: Product[] = [muuhuHairDryer, muuhuComb, muuhuScalpPro];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export const productsById = products.reduce(
  (acc, product) => {
    acc[product.id] = product;
    return acc;
  },
  {} as Record<string, Product>,
);

export type { Product };
