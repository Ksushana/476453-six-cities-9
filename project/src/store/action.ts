import {createAction} from '@reduxjs/toolkit';
import { Offers, Offer } from '../types/offer';

export const setCity = createAction<string>('main/setCity');

export const setOffers = createAction<Offers>('main/setOffers');

export const setCurrentOffer = createAction<Offer>('main/setCurrentOffer');


