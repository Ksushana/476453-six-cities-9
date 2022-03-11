import {Offer} from '../../../types/offer';

type PriceProps = {
  offer: Offer;
}


function Price({offer} : PriceProps) : JSX.Element {
  return (
    <div className="property__price">
      <b className="property__price-value">&euro;{offer.price}</b>
      <span className="property__price-text">&nbsp;night</span>
    </div>
  );
}

export default Price;
