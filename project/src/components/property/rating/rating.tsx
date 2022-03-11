import {Offer} from '../../../types/offer';

type RatingProps = {
  offer: Offer;
}

function Rating({offer}: RatingProps) : JSX.Element {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{width : `${offer.rating / 5 * 100}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{offer.rating}</span>
    </div>
  );
}

export default Rating;
