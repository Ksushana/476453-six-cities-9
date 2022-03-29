import { AppRoute, AuthorizationStatus, FAVORITE_STATUS } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/useState';
import { redirectToRoute } from '../../../store/action';
import { fetchFavoritesAction, toggleFavoriteAction } from '../../../store/api-actions';
import {Offer} from '../../../types/offer';

type NameProps = {
  offer: Offer;
}

function Name({offer}: NameProps) : JSX.Element {

  const dispatch = useAppDispatch();
  const {authorizationStatus} = useAppSelector((state) => state);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const postFavoriteFlag = offer.isFavorite ? FAVORITE_STATUS.isNotFavorite : FAVORITE_STATUS.isFavorite;

  async function toggleStatus() {
    if (!isAuthorized) {
      dispatch(redirectToRoute(AppRoute.Login));
    } else {
      await dispatch(toggleFavoriteAction({
        hotelID: offer.id,
        status: postFavoriteFlag,
      }));
      await dispatch(fetchFavoritesAction());
    }
  }

  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">
        {offer.title}
      </h1>
      <button onClick={toggleStatus} className="property__bookmark-button button" type="button">
        <svg className="property__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
  );
}

export default Name;
