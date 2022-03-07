import ReviewItem from '../review/review';
import {Review} from '../../../types/review';


type ReviewsProps = {
  reviews: Review[],
};

function ReviewList({reviews}: ReviewsProps) :JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewItem key={review.id} {...review} />)}
      </ul>
    </>
  );
}

export default ReviewList;
