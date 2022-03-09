import { Offers } from './offer';
import store from '../store';

export type AppState = {
  location: string,
  offers: Offers,
}
export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
