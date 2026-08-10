import type { Product } from "@/data/products";
import { AppPromo, BlueLightSection } from "./AppPromo";
import { ComparisonTable } from "./ComparisonTable";
import { FAQSection } from "./FAQSection";
import { GuaranteeSection } from "./GuaranteeSection";
import { ProductHero } from "./ProductHero";
import { ProductReviewsSection } from "./ProductReviewsSection";
import { StickyAddToCart } from "./StickyAddToCart";
import {
  DeferredBeforeAfterGrid,
  DeferredExpertSection,
  DeferredVideoReviews,
  DeferredWavelengthSelector,
} from "./DeferredClientSections";
import { TrustBadges } from "./TrustBadges";
import { CombFeatureSections } from "./CombFeatureSections";

import { HairDryerProductPage } from "./HairDryerProductPage";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ProductPage({ product, variant }: { product: Product; variant?: string }) {
  if (product.id === "muuhu-hair-dryer" || product.template === "hair-dryer") {
    return <HairDryerProductPage product={product} />;
  }

  if (product.id === "muuhu-comb") {
    return (
      <>
        <ProductHero product={product} />
        <TrustBadges />
        <CombFeatureSections />
        <ProductReviewsSection productHandle={product.slug} />
        <FAQSection faqs={product.faqs} productHandle={product.id} />
        <GuaranteeSection productHandle={product.id} />
        <StickyAddToCart product={product} />
      </>
    );
  }

  return (
    <>
      <ProductHero product={product} />
      <TrustBadges />
      <DeferredVideoReviews />
      {/* <FeatureGrid /> */}
      <DeferredBeforeAfterGrid />
      <DeferredWavelengthSelector />
      <DeferredExpertSection />
      {/* <TouchTechSection /> */}
      <AppPromo />
      <ProductReviewsSection productHandle={product.slug} />
      <BlueLightSection />
      <ComparisonTable />
      <FAQSection faqs={product.faqs} productHandle={product.id} />
      <GuaranteeSection productHandle={product.id} />
      <StickyAddToCart product={product} />
    </>
  );
}
