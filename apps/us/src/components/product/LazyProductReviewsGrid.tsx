import { ProductReviewsGrid } from "./ProductReviewsGrid";
import type { ProductReview } from "@/types/reviews";

type LazyProductReviewsGridProps = {
  averageRating: number;
  productHandle: string;
  initialReviews: ProductReview[];
  pageSize: number;
  ratingDistribution: Record<string, number>;
  total: number;
};

export function LazyProductReviewsGrid(props: LazyProductReviewsGridProps) {
  return <ProductReviewsGrid {...props} />;
}
