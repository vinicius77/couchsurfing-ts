import { useState, useEffect } from "react";
import { Review, reviews } from "../../mockData/reviews";
import {
  getLatestReviewer,
  showReviewTotal,
  getTopTwoReviews,
} from "../../utils/review";
import "./styles.css";

const Reviews = () => {
  const [topTwoReviews, setTopTwoReviews] = useState<Review[]>([]);
  const [isShowReview, setIsShowReview] = useState(false);
  const latestReviewer = getLatestReviewer(reviews);
  const { name, loyaltyUser } = latestReviewer;
  const reviewsInfo = showReviewTotal(reviews.length, name, loyaltyUser);

  const showReviews = (isShow: boolean): void => {
    setIsShowReview(isShow);
  };

  useEffect(() => {
    const twoReviews = getTopTwoReviews(reviews);
    setTopTwoReviews(twoReviews);
  }, []);

  return (
    <section>
      <h5>{reviewsInfo}</h5>
      <button type="button" onClick={() => showReviews(!isShowReview)}>
        Get reviews
      </button>
      <div className="reviews">
        {isShowReview &&
          topTwoReviews.map(({ stars, name }) => (
            <div
              className="pr1"
              key={`${name}-${stars}`}
            >{`${stars} stars from ${name}`}</div>
          ))}
      </div>
      <div className="divider" />
    </section>
  );
};

export default Reviews;
