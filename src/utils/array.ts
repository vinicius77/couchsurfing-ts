import { Review } from "../mockData/reviews";

export function sortReviewsByDate(reviewsArray: Review[]): Review[] {
  return reviewsArray.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}
