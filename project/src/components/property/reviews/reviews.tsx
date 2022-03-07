import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';
import {Review} from '../../../types/review';

type ReviewsProps = {
  reviews: Review[],
};

function Reviews({reviews}: ReviewsProps) : JSX.Element {
  return (
    <section className="property__reviews reviews">
      <ReviewList reviews={reviews} />
      <ReviewForm />
    </section>
  );
}

export default Reviews;

