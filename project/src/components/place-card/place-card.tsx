import { useState } from 'react';
import {Link} from 'react-router-dom';
import { AppRoute, AuthorizationStatus, FAVORITE_STATUS } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/useState';
import { redirectToRoute } from '../../store/action';
import { toggleFavoriteAction } from '../../store/api-actions';
import { Offer } from '../../types/offer';

type CardProps = {
  offer: Offer,
  id: number,
  price: number,
  name: string,
  rating: number,
  type: string;
  premium: boolean,
  image: string,
  cardLook?: string,
  imageLook?: string,
  infoLook?: string,
  addedToFavorite : boolean,
  imageWidth?: number,
  imageHeight?: number,
  onSelected: (offer: Offer) => void,
}

function PlaceCard({id, offer, onSelected, cardLook, imageLook, infoLook, price, name, rating, type, premium, image,addedToFavorite = false,imageWidth= 260, imageHeight=200}: CardProps ): JSX.Element {
  const onMouseEnter = () => {
    onSelected(offer);
  } ;

  const dispatch = useAppDispatch();
  const {authorizationStatus} = useAppSelector((state) => state);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const [isOfferFavorite, setToggleFavorite] = useState(offer.isFavorite);

  const postFavoriteFlag = offer.isFavorite ? FAVORITE_STATUS.isNotFavorite : FAVORITE_STATUS.isFavorite;

  function toggleStatus() {
    if (!isAuthorized) {
      dispatch(redirectToRoute(AppRoute.Login));
    } else {
      dispatch(toggleFavoriteAction({
        hotelID: id,
        status: postFavoriteFlag,
      }));
      setToggleFavorite(isOfferFavorite);
    }
  }


  return (
    <article data-id={id} onMouseEnter={onMouseEnter} className={`place-card ${cardLook} `}>
      {premium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className={`place-card__image-wrapper ${imageLook}`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={image} width={imageWidth} height={imageHeight} alt="Place image" />
        </Link>
      </div>
      <div className={`place-card__info ${infoLook}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={toggleStatus} className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width : `${rating / 5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
