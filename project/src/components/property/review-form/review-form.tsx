import {ChangeEvent, FormEvent, useRef, useState} from 'react';
import { useAppDispatch } from '../../../hooks/useState';
import { addCommentAction } from '../../../store/api-actions';
import { AddComment } from '../../../types/offer';
import ReviewFormRating from '../review-form-rating/review-form-rating';

type ReviewFormProps = {
  hotelID: number;
}

function ReviewForm({hotelID}: ReviewFormProps) : JSX.Element {

  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const [formComment, setFormComment] = useState('');
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fieldChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => setFormComment(evt.target.value);
  const ratingChangeHandle = (evt : FormEvent<HTMLInputElement>) => {
    const element = evt.currentTarget as HTMLInputElement;
    const value = element.value;
    const ratingData = Number(value);
    setRating(ratingData);
  };

  const clearStars: any = () => {
    const stars = document.querySelectorAll('.form__rating-input');
    stars.forEach((star: any) => {
      star.checked = false;
    });
  };

  const dispatch = useAppDispatch();

  const onSubmit = (reviewData: AddComment) => {
    setIsLoading(true);
    dispatch(addCommentAction(reviewData))
      .then(() => {
        setError(null);
        setIsLoading(false);
        setRating(1);
        setFormComment('');
        clearStars();
      })
      .catch((e) => {
        setError(e);
      });

  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      hotelID,
      commentData: {
        comment: formComment,
        rating: rating,
      },
    });
  };


  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewFormRating onChange={ratingChangeHandle}/>
      <textarea ref={textRef} value={formComment} onChange={fieldChangeHandle} maxLength={300} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button"  type="submit" disabled={isLoading || rating === 0 || formComment.length < 50}>Submit</button>
      </div>
      {error && <p>Network error</p>}
    </form>
  );
}

export default ReviewForm;
