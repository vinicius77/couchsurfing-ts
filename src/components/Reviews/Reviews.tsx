import { reviews } from "../../mockData/reviews";
import { getLatestReviewer, showReviewTotal } from "../../utils/review";

const Reviews = () => {
  const latestReviewer = getLatestReviewer(reviews);
  const { name, loyaltyUser } = latestReviewer;
  const reviewsInfo = showReviewTotal(reviews.length, name, loyaltyUser);

  return (
    <>
      <h5>{reviewsInfo}</h5>
      <h3>Other Properties recommended to you:</h3>
    </>
  );
};

export default Reviews;
