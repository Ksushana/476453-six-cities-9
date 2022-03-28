
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoriteCitiesList from '../../components/favotite-cities-list/favorite-cities-list';
import { useAppSelector } from '../../hooks/useState';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';

function Favorites(): JSX.Element {
  const { favorites } = useAppSelector((state) => state);
  return (
    <div className="page">
      <Header />
      {favorites.length > 0 ?
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <FavoriteCitiesList offers={favorites} />
            </section>
          </div>
        </main> :
        <FavoritesEmpty />}
      <Footer />
    </div>
  );
}

export default Favorites;
