import {createAction} from '@reduxjs/toolkit';
import { Offers, Offer } from '../types/offer';
import {AppRoute, AuthorizationStatus} from '../const';

export const setCity = createAction<string>('main/setCity');

export const setOffers = createAction<Offers>('main/setOffers');

export const setCurrentOffer = createAction<Offer>('main/setCurrentOffer');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string>('main/setError');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
