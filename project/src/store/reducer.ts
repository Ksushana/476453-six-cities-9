import { createReducer } from '@reduxjs/toolkit';
import {offers} from '../mocks/offers';
import { setCity, setOffers } from './action';
import { AppState } from '../types/state';

const initialState: AppState = {
  location: 'Paris',
  offers: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.location = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export default reducer;
