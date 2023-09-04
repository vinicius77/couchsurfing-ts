import { Loyality, Review } from "../mockData/reviews";
import { sortReviewsByDate } from "./array";

export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: Loyality
): string {
  const iconDisplay = isLoyalty === Loyality.GOLD_USER ? "⭐" : "";
  return `reviews: ${value.toString()} | last reviewed by ${reviewer} ${iconDisplay}`;
}

export function getLatestReviewer(reviews: Review[]): Review {
  return sortReviewsByDate(reviews)[0];
}
