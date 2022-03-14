import { Offer, Offers } from './offer';
import store from '../store';

export type AppState = {
  city: string,
  offers: Offers,
  currentOffer: Offer
}
export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
