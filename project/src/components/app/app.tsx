import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import Layout from '../layout/layout';
import Main from '../../pages/main-page/main-page';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import OfferCard from '../../pages/offer/offer';
import NotFound from '../404/404';
import PrivateRoute from '../private-route/private-route';
import {Reviews} from '../../types/review';
import {useAppSelector} from './../../hooks/useState';
// import { useAppDispatch, useAppSelector } from '../../hooks/useState';
// import { useEffect } from 'react';
// import { setOffers } from '../../store/action';
import LoadingScreen from '../loading-screen/loading-screen';
import { isCheckedAuth } from '../header/header';

type AppScreenProps = {
  reviews: Reviews;
}

function App({reviews}: AppScreenProps): JSX.Element {
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch((nextDispatch, getState, api) => {
  //     api.get('/hotels')
  //       .then((response) => {
  //         nextDispatch(setOffers(response.data));
  //       });
  //   });
  // }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={
            <Main/>
          }
          />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Offer}>
            <Route index element={<OfferCard reviews={reviews} />} />
            <Route path=':id' element={<OfferCard reviews={reviews} />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
