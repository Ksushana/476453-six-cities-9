import { MouseEvent } from 'react';
import {useNavigate} from 'react-router-dom';

import { useAppSelector } from './useSelector';
import { toggleFavoriteAction } from '../store/api-actions';
import { Offer } from '../types/offer';
import { APIRoute, AuthorizationStatus, FAVORITE_STATUS } from '../const';
import { useAppDispatch } from './useDispatch';

function useFavoriteCardState(cardInfo: Offer) {
  const {authorizationStatus} = useAppSelector((state) => state);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const favorites = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function isCardInFavoriteCollection() {
    const inCollection = favorites.find((favorite) => favorite.id === cardInfo.id);
    return inCollection ? FAVORITE_STATUS.isNotFavorite : FAVORITE_STATUS.isFavorite;
  }

  function changeFavoriteFlagStatus(e: MouseEvent) {
    e.preventDefault();
    if (isAuthorized) {
      const { id } = cardInfo;
      dispatch(toggleFavoriteAction({ id, status: isCardInFavoriteCollection() }));
    } else {
      navigate(APIRoute.Login);
    }
  }

  return { changeFavoriteFlagStatus, isCardInFavoriteCollection };
}

export default useFavoriteCardState;
