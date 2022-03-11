import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import store from './store';
import {REVIEWS} from './mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={REVIEWS}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
