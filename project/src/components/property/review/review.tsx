import dayjs from 'dayjs';

type ReviewProps = {
  text: string;
  date: string;
  name: string;
  photo: string;
  rating: number;
}

function Review({ text, date, name, photo, rating}:ReviewProps ) :JSX.Element {
  const reviewDate = dayjs(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={photo} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width : `${rating/5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={reviewDate.format('YYYY-MM-DD')}>{reviewDate.format('YYYY-MM-DD')}</time>
      </div>
    </li>
  );
}

export default Review;
