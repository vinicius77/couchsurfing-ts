import { Loyality, Review } from "../mockData/reviews";
import { sortReviewsByDate } from "./array";

export const makePlural = (value: number): string => {
  if (value > 1 || value === 0) return "s";
  return "";
};

export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: Loyality
): string {
  const iconDisplay = isLoyalty === Loyality.GOLD_USER ? "⭐" : "";
  return `Review${makePlural(
    value
  )}: ${value} | last reviewed by ${reviewer} ${iconDisplay}`;
}

export function getLatestReviewer(reviews: Review[]): Review {
  return sortReviewsByDate(reviews)[0];
}

export function getTopTwoReviews(reviews: Review[]) {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0, 2);
}
