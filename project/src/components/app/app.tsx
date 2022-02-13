import Main from '../main-page/main-page';
// import Favorites from '../favorites/favorites';
// import FavoritesEmpty from '../favorites-empty/favorites-empty';
// import Login from '../login/login';
// import MainPageEmpty from '../main-page-empty/main-page-empty';
// import Property from '../property/property';

type AppScreenProps = {
  placesToStay: number;
}

function App({placesToStay}: AppScreenProps): JSX.Element {
  return (
    <Main placesToStay={placesToStay}/>
  );
}

export default App;
