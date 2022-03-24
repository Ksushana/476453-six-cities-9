import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import Layout from '../layout/layout';
import Main from '../../pages/main-page/main-page';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import OfferCard from '../../pages/offer/offer';
import NotFound from '../404/404';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading-screen/loading-screen';
import { useAppSelector } from '../../hooks/useState';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-router/history-router';

function App(): JSX.Element {

  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);
  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
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
            <Route index element={<OfferCard  />} />
            <Route path=':id' element={<OfferCard />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
