import {Link} from 'react-router-dom';

type CardProps = {
  price: number,
  name: string,
  rating: string,
  type: string;
  premium: boolean,
  image: string,
  favorite? : boolean,
  near? : boolean,
  cities? : boolean,
  addedToFav? : boolean
}

function PlaceCard({price, name, rating, type, premium, image, favorite, cities, near,addedToFav}: CardProps ): JSX.Element {
  return (
    <article className={`place-card ${cities ? 'cities__place-card' : ''} ${favorite ? 'favorites__card' : ''} ${near ? 'near-places__card' : ''}`}>
      {premium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className={`place-card__image-wrapper ${cities ? 'cities__image-wrapper' : ''}${favorite ? 'favorites__image-wrapper' : ''}`}>
        <Link to="/">
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className={`place-card__info ${favorite ? 'favorites__card-info' : ''}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${addedToFav ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width : rating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/">{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
