import { productMediaAsset } from "@/lib/media";

export type FreeGiftDetailSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type FreeGiftDetail = {
  slug: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  note: string;
  image: string;
  imageAlt: string;
  cardTitle: string;
  cardBullets: string[];
  sections: FreeGiftDetailSection[];
  primaryCtaLabel: string;
};

const bundleFooter =
  "The Muuhu LED Mask offer works best as a complete ritual: the mask, the travel case, the LED Torch, and the customer skincare guide all support the same goal.";

export const freeGiftBundleFooter = bundleFooter;

export const freeGiftDetails: FreeGiftDetail[] = [
  {
    slug: "premium-travel-box",
    eyebrow: "Free Bonus Gift",
    title: "Premium Travel Box",
    seoTitle: "Premium Travel Box for Muuhu LED Mask",
    seoDescription:
      "Discover the premium travel box included with the Muuhu LED Mask offer for protected storage, organized accessories, and easier travel.",
    intro:
      "The Premium Travel Box is the practical bonus most customers do not realize they will appreciate until the mask becomes part of their weekly routine. It gives your Muuhu LED Mask a dedicated home, protects it between sessions, and makes travel much easier.",
    note:
      "This travel box is currently included as a free bonus with the Muuhu LED Mask offer.",
    image: productMediaAsset("ChatGPT Image May 31, 2026, 11_53_13 PM.png"),
    imageAlt: "Premium Travel Box for the Muuhu LED Mask",
    cardTitle: "Why it increases the value of your order",
    cardBullets: [
      "Keeps the mask protected between uses",
      "Makes the full ritual easier to store and organize",
      "Helps frequent travellers stay consistent",
      "Feels like part of a complete premium set",
    ],
    sections: [
      {
        title: "Why customers care about this one",
        paragraphs: [
          "Customers buying a higher-consideration device often want reassurance that the package feels complete. A dedicated travel box does that immediately. It makes the mask feel giftable, more premium, and easier to keep in good condition.",
          "It also reduces the little friction points that can stop people from staying consistent, like not knowing where to keep the charger, goggles, or guide.",
        ],
      },
      {
        title: "What it helps solve",
        paragraphs: [
          "The best skincare tools only work when they stay part of your routine. A proper case helps you keep the mask safe, tidy, and close at hand instead of tucked away loosely in a drawer.",
          "That matters if you want your purchase to feel like a long-term ritual rather than a one-week impulse.",
        ],
        bullets: [
          "Cleaner storage at home",
          "Better protection during travel",
          "Less risk of cables and accessories getting misplaced",
          "A more premium unboxing and ownership experience",
        ],
      },
    ],
    primaryCtaLabel: "Claim The Mask + Free Gifts",
  },
  {
    slug: "muuhu-comb",
    eyebrow: "Free Bonus Gift",
    title: "Muuhu Hair Growth Comb",
    seoTitle: "Muuhu Hair Growth Therapy Comb Bonus Gift",
    seoDescription:
      "Explore the targeted Muuhu Hair Growth Therapy Comb included as a free companion gift with the Muuhu Hair Dryer offer.",
    intro:
      "The Muuhu Comb adds precision scalp care to the main hair dryer offer. While the dryer gives you salon-grade styling, the comb gives you targeted red light therapy and micro-vibration massage for healthier hair roots.",
    note:
      "The current Muuhu Hair Dryer offer includes the Muuhu Comb as a free bonus gift.",
    image: "/images/products/muuhu-comb/muuhu-hair-growth-therapy-comb-hero.png",
    imageAlt: "Muuhu Hair Growth Therapy Comb bonus gift",
    cardTitle: "Why customers love this bonus",
    cardBullets: [
      "Stimulates hair follicles with 650nm Red Light",
      "Relaxes scalp with soothing micro-vibrations",
      "Distributes essential oils without greasing hair",
      "Makes the haircare bundle feel complete",
    ],
    sections: [
      {
        title: "Where a dedicated scalp tool helps",
        paragraphs: [
          "Some customers love the idea of a main styler for full hair drying and a dedicated tool for scalp health. The comb fits that role perfectly by providing targeted therapy.",
          "It helps the offer feel like a complete hair growth and styling system rather than a single device.",
        ],
        bullets: [
          "Targeted follicle stimulation",
          "Relaxing scalp massage",
          "Mess-free oil application",
          "A convenient companion for your daily routine",
        ],
      },
      {
        title: "Why this bonus improves the bundle",
        paragraphs: [
          "It answers a common question: How do I improve my hair health at the root? Instead of buying another device later, the offer already covers both beautiful styling and underlying root health.",
          "That makes the bundle feel incredibly generous and easier to justify.",
        ],
      },
    ],
    primaryCtaLabel: "Claim The Dryer + Free Gifts",
  },
  {
    slug: "skincare-guide",
    eyebrow: "Customer Guide Bonus",
    title: "The Muuhu Haircare Masterclass",
    seoTitle: "The Muuhu Haircare Masterclass E-book Bonus",
    seoDescription:
      "Learn what is inside the Muuhu Haircare Masterclass delivered after your Hair Dryer purchase, including styling tips and scalp health routines.",
    intro:
      "This is not a generic PDF. It is a full Muuhu masterclass designed to help Hair Dryer buyers get more value out of their styling system. It explains the attachments, shows how to build a routine, and turns uncertainty into salon-quality results.",
    note:
      "The Muuhu Haircare Masterclass is delivered after your purchase. The private guide file is not published on this page.",
    image: "/images/products/muuhu-hair-dryer/attachments/cg_user_manual.png",
    imageAlt: "Muuhu Haircare Masterclass bonus",
    cardTitle: "What customers unlock inside",
    cardBullets: [
      "Coanda effect styling explained simply",
      "Your 7 attachments broken down clearly",
      "Hair-type guidance and weekly routines",
      "Pre-styling prep, serum pairings, and heat protection tips",
    ],
    sections: [
      {
        title: "What is inside the guide",
        paragraphs: [
          "The guide walks customers through the Muuhu method from first principles to practical routines. It covers the science of high-speed airflow, the role of each attachment, hair-type matching, and the best products to pair with your blowouts.",
          "It also includes travel styling tips, routine examples, common myths, and a bonus chapter on utilizing the Muuhu Comb.",
        ],
        bullets: [
          "Welcome to the Muuhu Method",
          "The Science of High-Speed Airflow",
          "Your 7 Attachments, Explained",
          "Find Your Hair Type",
          "Your Personalised Styling Plan",
          "The Best Products to Pair",
          "Tips for Volume and Curl Retention",
        ],
      },
      {
        title: "Why the guide matters",
        paragraphs: [
          "A common hesitation is simple: What if I buy the 7-in-1 dryer and do not know how to use all the attachments properly? The guide removes that fear. It gives customers a clear starting point.",
          "That turns the order into a complete masterclass, not just a product shipment.",
        ],
      },
    ],
    primaryCtaLabel: "Buy To Unlock This Guide",
  },
];

export function getFreeGiftDetail(slug: string) {
  return freeGiftDetails.find((gift) => gift.slug === slug);
}
