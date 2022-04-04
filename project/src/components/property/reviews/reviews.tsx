import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';
import { useAppSelector } from '../../../hooks/useSelector';
import { AuthorizationStatus } from '../../../const';

type ReviewFormProps = {
  hotelID: number;
}

function Reviews({hotelID}: ReviewFormProps) : JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  return (
    <section className="property__reviews reviews">
      <ReviewList/>
      {isAuthorized && <ReviewForm hotelID={hotelID} /> }
    </section>
  );
}

export default Reviews;

