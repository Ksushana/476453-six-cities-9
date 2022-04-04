import {Comments, Offer, Offers } from './offer';
import {store} from '../store';
import {AuthorizationStatus} from '../const';

export type AppState = {
  city: string,
  offers: Offers,
  currentOffer: Offer,
  authorizationStatus: AuthorizationStatus,
  error: string,
  isDataLoaded: boolean,
  user: string,
  offersNearby: Offers,
  comments: Comments;
  offer: Offer | null,
  favorites: Offers;
  isCurrentOfferLoaded: boolean
}

export type UserType = {
  avatarUrl: string,
  email: string,
  id: number,
  isPro: boolean,
  name: string,
  token: string,
}
export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
