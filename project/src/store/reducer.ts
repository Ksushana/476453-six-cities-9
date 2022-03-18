import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers, setCurrentOffer, requireAuthorization, setError, setUser } from './action';
import { AppState } from '../types/state';
import {AuthorizationStatus} from '../const';

const initialState: AppState = {
  city: 'Paris',
  offers: [],
  currentOffer: [][0],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
  isDataLoaded: false,
  user: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setCurrentOffer, (state, action) => {
      state.offers[0] = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});

export {reducer};
