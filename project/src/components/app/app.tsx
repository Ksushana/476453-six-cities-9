import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import Layout from '../layout/layout';
import Main from '../../pages/main-page/main-page';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import OfferBlock from '../../pages/offer/offer';
import NotFound from '../404/404';
import PrivateRoute from '../private-route/private-route';
import {Offers} from '../../types/offer';

type AppScreenProps = {
  placesToStay: number;
  offers: Offers;
}

function App({placesToStay, offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={
            <Main placesToStay={placesToStay} offers={offers}/>
          }
          />
          <Route path={AppRoute.Favorites} element={<PrivateRoute><Favorites offers={offers}/></PrivateRoute>} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Offer}>
            <Route index element={<OfferBlock />} />
            <Route path=':id' element={<OfferBlock />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
