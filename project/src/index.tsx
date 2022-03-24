import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './components/app/app';
import {store} from './store';
import {fetchOffersAction, checkAuthAction} from './store/api-actions';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());
// const email = useAppSelector((state) => state.user);
// // eslint-disable-next-line no-console
// console.log(email);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
