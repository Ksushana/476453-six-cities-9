import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../layout/layout';
import Main from '../../pages/main-page/main-page';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import NotFound from '../404/404';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  placesToStay: number;
}

function App({placesToStay}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main placesToStay={placesToStay} />} />
          <Route path='/favorites' element={<PrivateRoute><Favorites /></PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='offer'>
            <Route index element={<Offer />} />
            <Route path=':id' element={<Offer />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
