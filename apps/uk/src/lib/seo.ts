import type { Product } from "@/data/products";
import type { FAQItem } from "@/data/productSections";
import { absoluteUrl } from "@/lib/site";

export function productJsonLd(product: Product) {
  const productUrl = absoluteUrl(`/products/${product.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    image: product.gallery.map((image) => absoluteUrl(image.src)),
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Muuhu",
    },
    category:
      product.template === "hair-dryer"
        ? "Hair Dryer"
        : "Hair Care Device",
    sku: product.sku,
    mpn: product.sku,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: product.currency,
      price: (product.priceCents / 100).toFixed(2),
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Muuhu",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0.00",
          currency: product.currency,
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "GB",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 2,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 5,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "GB",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 90,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
    additionalProperty: product.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
  };
}

export function productWebPageJsonLd(product: Product) {
  const productUrl = absoluteUrl(`/products/${product.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${productUrl}#webpage`,
    url: productUrl,
    name: product.seoTitle,
    description: product.seoDescription,
    inLanguage: "en-GB",
    dateModified: "2026-06-16",
    isPartOf: {
      "@id": `${absoluteUrl("/")}#website`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(product.gallery[0].src),
    },
    mainEntity: {
      "@id": `${productUrl}#product`,
    },
    audience: {
      "@type": "Audience",
      audienceType: "UK hair care shoppers comparing hair dryers",
    },
    about: [
      { "@type": "Thing", name: "best hair dryer UK" },
      { "@type": "Thing", name: "7-in-1 styler" },
      { "@type": "Thing", name: "ionic hair dryer" },
      { "@type": "Thing", name: "professional salon results" },
      { "@type": "Thing", name: "frizz-free styling" },
    ],
  };
}

export function faqJsonLd(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${absoluteUrl("/")}#organization`,
    name: "Muuhu",
    url: absoluteUrl("/"),
    logo: absoluteUrl("/favicon.ico"),
    sameAs: [
      "https://www.instagram.com/muuhu1234/",
      "https://www.facebook.com/profile.php?id=61591489414007",
      "https://www.youtube.com/@Muuhu-w3b",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@muuhu.com",
      availableLanguage: ["en-GB", "English"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    name: "Muuhu UK",
    url: absoluteUrl("/"),
    publisher: {
      "@id": `${absoluteUrl("/")}#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/products/muuhu-hair-dryer")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function guidePageJsonLd({
  title,
  description,
  url,
  faqs,
}: {
  title: string;
  description: string;
  url: string;
  faqs: FAQItem[];
}) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${absoluteUrl(url)}#webpage`,
      name: title,
      description,
      url: absoluteUrl(url),
      inLanguage: "en-GB",
      isPartOf: {
        "@id": `${absoluteUrl("/")}#website`,
      },
      about: [
        { "@type": "Thing", name: "best hair dryer UK" },
        { "@type": "Thing", name: "7-in-1 styler" },
        { "@type": "Thing", name: "frizz-free drying" },
        { "@type": "Thing", name: "salon professional device" },
      ],
      mainEntity: {
        "@id": `${absoluteUrl("/products/muuhu-hair-dryer")}#product`,
      },
    },
    faqJsonLd(faqs),
  ];
}

export function articleJsonLd(post: {
  title: string;
  seoDescription: string;
  slug: string;
  publishDate: string;
  updatedDate: string;
  author: { name: string };
  heroImage: { src: string; alt: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(`/blog/${post.slug}`)}#article`,
    headline: post.title,
    description: post.seoDescription,
    url: absoluteUrl(`/blog/${post.slug}`),
    datePublished: post.publishDate,
    dateModified: post.updatedDate,
    inLanguage: "en-GB",
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@id": `${absoluteUrl("/")}#organization`,
    },
    isPartOf: {
      "@id": `${absoluteUrl("/")}#website`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${absoluteUrl(`/blog/${post.slug}`)}#webpage`,
    },
    ...(post.heroImage.src
      ? {
          image: {
            "@type": "ImageObject",
            url: absoluteUrl(post.heroImage.src),
          },
        }
      : {}),
  };
}
