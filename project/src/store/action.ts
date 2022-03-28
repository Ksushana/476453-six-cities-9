import {createAction} from '@reduxjs/toolkit';
import { Offers, Offer, Comments } from '../types/offer';
import {AppRoute, AuthorizationStatus} from '../const';

export const setCity = createAction<string>('main/setCity');

export const setOffers = createAction<Offers>('main/setOffers');

export const setCurrentOffer = createAction<Offer>('main/setCurrentOffer');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string>('main/setError');

export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');

export const setUser = createAction<string>('main/setUser');

export const fetchOfferById = createAction<Offer>('offer/fetchOfferById');

export const setRoomOffers = createAction<Offers>('offer/setRoomOffers');

export const setRoomComments = createAction<Comments>('offer/setRoomComments');

export const setFavorites = createAction<Offers>('favorites/setFavorites');

export const removeOffer = createAction<Offer>('favorites/removeOffer');

export const toggleStatus = createAction<Offer>('favorites/toggleStatus');
