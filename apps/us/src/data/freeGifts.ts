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
  "The Muuhu Airpro offer works best as a complete styling system: the dryer, premium packaging, Muuhu Comb, and Haircare Masterclass all help customers get more value from the bundle from day one.";

export const freeGiftBundleFooter = bundleFooter;

export const freeGiftDetails: FreeGiftDetail[] = [
  {
    slug: "premium-packaging",
    eyebrow: "Free Bonus Gift",
    title: "Premium Packaging",
    seoTitle: "Premium Packaging Gift for Muuhu Airpro",
    seoDescription:
      "See the premium packaging included with the Muuhu Airpro offer, designed for safer storage, cleaner presentation, and a more gift-ready styling bundle.",
    intro:
      "Premium packaging makes the Muuhu 7-in-1 styling system feel complete from the moment it arrives. It gives the dryer and attachments a cleaner presentation, supports a more gift-ready unboxing, and helps the full bundle stay organized between styling sessions.",
    note:
      "This premium packaging is currently included as a free bonus with the Muuhu Airpro offer.",
    image: "/images/products/muuhu-hair-dryer/muuhu-luxury-case-v2.webp",
    imageAlt: "Premium packaging included with the Muuhu Airpro bundle",
    cardTitle: "Why it makes the bundle feel complete",
    cardBullets: [
      "Designed around the Muuhu styling system",
      "Keeps attachments easier to store",
      "Adds a premium gift-ready feel",
      "Helps protect the bundle between styling sessions",
    ],
    sections: [
      {
        title: "A better first impression",
        paragraphs: [
          "For a multi-attachment styling tool, the unboxing should feel considered. The premium packaging helps the dryer, attachments, guide, and bonus items arrive as one complete system rather than separate loose pieces.",
          "That matters when the product is being bought as a gift or as a higher-value upgrade for a daily hair routine.",
        ],
      },
      {
        title: "Useful after delivery",
        paragraphs: [
          "The packaging is not just for the first photo. It helps customers keep the full Muuhu set tidier, easier to understand, and easier to store between styling sessions.",
          "It supports the same premium feeling you see on the product page: clean presentation, organized accessories, and a styling system that feels ready from day one.",
        ],
        bullets: [
          "Cleaner storage at home",
          "Stronger unboxing value",
          "Easier attachment organization",
          "A more polished ownership experience",
        ],
      },
    ],
    primaryCtaLabel: "Claim The Dryer + Free Gifts",
  },
  {
    slug: "muuhu-comb",
    eyebrow: "Free Bonus Gift",
    title: "Muuhu Comb",
    seoTitle: "Muuhu Comb Bonus Gift",
    seoDescription:
      "Explore the Muuhu Comb included as a free companion gift with the Muuhu Airpro offer for scalp care, massage, and haircare routines.",
    intro:
      "The Muuhu Comb adds focused scalp care to the main Hair Dryer offer. While the dryer helps create smooth blowouts, volume, curls, and polished finishes, the comb supports the root-care side of the routine.",
    note:
      "The current Muuhu Airpro offer includes the Muuhu Comb as a free bonus gift.",
    image: "/images/products/muuhu-comb/muuhu-hair-growth-therapy-comb-hero.png",
    imageAlt: "Muuhu Comb bonus gift",
    cardTitle: "Why customers love this bonus",
    cardBullets: [
      "Pairs with wash-day and styling routines",
      "Adds a relaxing scalp massage step",
      "Helps distribute oils and serums more evenly",
      "Makes the haircare bundle feel complete",
    ],
    sections: [
      {
        title: "Where a dedicated scalp tool helps",
        paragraphs: [
          "A good hair routine is not only about the final blowout. The scalp-care step helps customers slow down, prep their roots, and make the full routine feel more personal.",
          "That makes the bundle feel more complete than a single styling device.",
        ],
        bullets: [
          "Targeted scalp massage",
          "Serum and oil routine support",
          "A calmer pre-styling ritual",
          "A useful companion for weekly haircare",
        ],
      },
      {
        title: "Why this bonus improves the bundle",
        paragraphs: [
          "The comb answers a simple customer question: how do I care for my hair before I style it? Together, the dryer and comb give customers both the finish and the prep routine.",
          "That makes the free gift feel genuinely useful, not like filler added to increase the bundle count.",
        ],
      },
    ],
    primaryCtaLabel: "Claim The Dryer + Free Gifts",
  },
  {
    slug: "haircare-ebook",
    eyebrow: "Customer Guide Bonus",
    title: "Muuhu Haircare Masterclass E-book",
    seoTitle: "Muuhu Haircare Masterclass E-book Bonus",
    seoDescription:
      "Discover the Muuhu Haircare Masterclass E-book included with your Hair Dryer purchase, with attachment guidance, styling routines, and scalp-care tips.",
    intro:
      "The Muuhu Haircare Masterclass is a private buyer guide built for the 7-in-1 Hair Dryer. It helps customers understand every attachment, choose the right heat and speed settings, and build routines for smooth blowouts, curl retention, frizz control, and scalp-care pairing with the Muuhu Comb.",
    note:
      "The guide is delivered after purchase and is not publicly published as a downloadable file on this page.",
    image: "/images/products/muuhu-hair-dryer/muuhu-haircare-ebook-gift.webp",
    imageAlt: "Muuhu Haircare Masterclass E-book bonus",
    cardTitle: "What customers unlock inside",
    cardBullets: [
      "Attachment-by-attachment styling guide",
      "Hair-type routine examples",
      "Heat protection and prep steps",
      "Muuhu Comb scalp-care chapter",
    ],
    sections: [
      {
        title: "What is inside the e-book",
        paragraphs: [
          "The guide explains the full Muuhu styling system in a way customers can actually use. It covers blowout prep, attachment selection, heat and speed choices, curl setting, smoothing, root lift, and frizz control.",
          "It also includes routine examples for different hair types, plus a dedicated scalp-care chapter for pairing the Muuhu Comb with wash-day and pre-styling routines.",
        ],
        bullets: [
          "Clear attachment guidance",
          "Hair-type routine examples",
          "Heat protection and prep advice",
          "Volume, curl, and smooth-finish tips",
        ],
      },
      {
        title: "Why the guide matters",
        paragraphs: [
          "A common hesitation with multi-stylers is not knowing where to begin. The e-book gives customers a clear starting point and turns the bundle into a guided styling system.",
          "Because the guide is delivered after purchase and not published publicly, it also feels like a genuine buyer-only bonus.",
        ],
      },
    ],
    primaryCtaLabel: "Buy To Unlock This Guide",
  },
];

export function getFreeGiftDetail(slug: string) {
  return freeGiftDetails.find((gift) => gift.slug === slug);
}
