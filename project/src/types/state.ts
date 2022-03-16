import {Offer, Offers } from './offer';
import {store} from '../store';
import {AuthorizationStatus} from '../const';

export type AppState = {
  city: string,
  offers: Offers,
  currentOffer: Offer,
  authorizationStatus: AuthorizationStatus,
  error: string,
  isDataLoaded: boolean,
}
export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
