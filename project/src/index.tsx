import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {CITY} from './mocks/city';
import {POINTS} from './mocks/points';
import {offers} from './mocks/offers';
import {REVIEWS} from './mocks/reviews';

const Setting = {
  PLACES_TO_STAY: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placesToStay = {Setting.PLACES_TO_STAY}
      offers = {offers}
      points={POINTS}
      city={CITY}
      reviews={REVIEWS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
