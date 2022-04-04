import ReviewItem from '../review/review';
import { useAppSelector } from '../../../hooks/useSelector';

function ReviewList() :JSX.Element {
  const { comments } = useAppSelector((state) => state);
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.slice(-10).reverse().map((comment) => <ReviewItem key={comment.id} text={comment.comment} date={comment.date} name={comment.user.name} photo={comment.user.avatarUrl} rating={comment.rating} />)}
      </ul>
    </>
  );
}

export default ReviewList;
