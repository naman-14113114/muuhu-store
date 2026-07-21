import { productAsset } from "@/lib/media";
import { muuhuHairDryer } from "./products";

export const homeHero = {
  eyebrow: "Next-generation hair styling",
  title: "Perfected for you.",
  copy: "Professional-grade salon styling from the comfort of your home. Experience radiant, healthy hair with our 110,000 RPM motor, 7 versatile attachments, and 200 million negative ions.",
  ctaLabel: "Shop the Muuhu Styler",
  ctaHref: `/products/${muuhuHairDryer.slug}`,
  images: [
    {
      src: productAsset("04-hairluxe.webp"),
      alt: "Muuhu Hair Dryer hero image",
    },
    {
      src: productAsset("01-amazing-hairstyles.webp"),
      alt: "Muuhu Hair Dryer lifestyle image",
    },
    {
      src: productAsset("03-before-after.webp"),
      alt: "Muuhu Hair Dryer styling image",
    },
  ],
};

export const homeMaskSpotlight = {
  eyebrow: "Professional grade",
  title: "The Muuhu Hair Styler with Auto-Wrap",
  copy: "Modern styling requires modern solutions. The Muuhu Styler does it all without extreme heat. No more fumbling around with outdated curlers and heavy dryers. With our lightweight ergonomic design, you can achieve salon results every day.",
  image: {
    src: productAsset("07-prep-hair.webp"),
    alt: "Muuhu Hair Dryer product spotlight",
  },
  product: muuhuHairDryer,
};

export const homeSkincareGuideIntro = {
  eyebrow: "Styling quiz",
  title: "Start with a routine that knows what your hair needs.",
  copy: "Take the Muuhu Styling Quiz to understand your unique hair concerns, choose the right attachments, and feel confident from your first session. It is simple, supportive, and made for real at-home consistency.",
  ctaLabel: "Start Quiz",
  ctaHref: "/pages/about-us", 
};

export const homeTechnologySpotlight = {
  eyebrow: "110,000 RPM motor plus 200M negative ions",
  title: "A smarter way to plan your blowout.",
  copy: "Use the guide to match your hair goals with the right Muuhu attachment. From volume support to smoother-looking hair, each tool has a purpose and a place in your weekly routine.",
  ctaLabel: "Shop the styler",
  ctaHref: `/products/${muuhuHairDryer.slug}`,
  image: {
    src: productAsset("05-coanda-effect.webp"),
    alt: "Muuhu attachments guide",
  },
};

export const homeFeatureCards = [
  {
    title: "Industry leading 110k RPM",
    copy: "Your Muuhu Styler is armed with a high-speed brushless motor to have you styled in record time.",
    image: productAsset("02-new-year-new-hair.webp"),
  },
  {
    title: "For all hair types",
    copy: "There is an attachment for everyone. It is non-damaging and relies on air, not extreme heat. Get a picture perfect finish.",
    image: productAsset("01-amazing-hairstyles.webp"),
  },
  {
    title: "Total Frizz Control",
    copy: "Frizz is always the first to ruin a good look. Get your hair smooth with 200 million negative ions.",
    image: productAsset("06-holiday-gift.webp"),
  },
];

export const homeLightTherapy = {
  eyebrow: "Aerodynamic origin",
  title: "What is the Coanda effect and where did it come from?",
  copy: "You can say thanks to aerodynamics for this incredible technology. The Coanda effect uses high-speed airflow to attract and wrap hair automatically around the barrel. Since then, it has revolutionized how we curl hair without extreme heat damage. It is safe, effortless, and gives you bouncy curls over and over again.",
  image: {
    src: productAsset("08-curling-wand.webp"),
    alt: "Coanda effect editorial image",
  },
};

export const homeYoungerYou = {
  title: "Reveal healthier hair",
  copy: "With 7 versatile attachments and intelligent heat control built into one powerful device, you can spend time to give yourself more time. It is self care when you need it, at anytime.",
  image: {
    src: productAsset("03-before-after.webp"),
    alt: "Muuhu styler reveal healthier hair",
  },
};

export const homeTorchSpotlight = {
  eyebrow: "Portable and powerful",
  title: "Targeted volume in your hand.",
  copy: 'Simply set aside some "Me Time" for 15 minutes a day. The Muuhu Styler harnesses high-speed airflow for root lift support, frizz relief, and targeted hair care.',
  ctaLabel: "Buy Now",
  ctaHref: `/products/${muuhuHairDryer.slug}`,
  image: {
    src: productAsset("00-travel-friendly-styler.webp"),
    alt: "Muuhu product spotlight",
  },
  product: muuhuHairDryer,
};

export const homeWavelengthMap = {
  eyebrow: "Personalised treatment guide",
  title: "Your attachment map",
  copy: "Tap any of the 7 attachments, select your hair concern, and discover exactly which tool to use and why.",
  zones: [
    "Roots",
    "Ends",
    "Crown",
    "Fringe",
    "Layers",
    "Overall length",
  ],
};

export const homeCustomerReviewsGrid = {
  title: "Why try the Muuhu Styler?",
  copy: "Tons of glowing reviews from customers!",
  ctaLabel: "About Us",
  ctaHref: "/pages/about-us",
  image: "/images/home/about-us-screenshot.png"
};
