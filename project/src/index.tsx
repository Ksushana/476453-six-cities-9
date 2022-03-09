import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import store from './store';
import {REVIEWS} from './mocks/reviews';

const Setting = {
  PLACES_TO_STAY: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        placesToStay = {Setting.PLACES_TO_STAY}
        reviews={REVIEWS}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
