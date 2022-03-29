import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers, setCurrentOffer, requireAuthorization, setError, setUser, setRoomOffers, setRoomComments, fetchOfferById, setFavorites } from './action';
import { AppState } from '../types/state';
import { AuthorizationStatus } from '../const';

const initialState: AppState = {
  city: 'Paris',
  offers: [],
  currentOffer: [][0],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
  isDataLoaded: false,
  user: '',
  offersNearby: [],
  comments: [],
  offer: null,
  favorites: [],
  isCurrentOfferLoaded: false,
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
    })
    .addCase(fetchOfferById, (state, action) => {
      state.offer = action.payload;
      state.isCurrentOfferLoaded = true;
    })
    .addCase(setRoomOffers, (state, action) => {
      state.offersNearby = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setRoomComments, (state, action) => {
      state.comments = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setFavorites, (state, action) => {
      state.favorites = action.payload;
    });
});

export default reducer;
