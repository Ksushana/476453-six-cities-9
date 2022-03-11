import {Link} from 'react-router-dom';
// import List from '../../components/list/list';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {Offer} from '../../types/offer';

type FavPageProps = {
  offers: Offer[];
}

function Favorites({offers}: FavPageProps): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link to='/' className="locations__item-link">
                      <span>Amsterdam</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {/* <List offers={offers} lookView={'favorites__card'} imageView={'favorites__image-wrapper'} infoView={'favorites__card-info'} imageWidth={150} imageHeight={110}/> */}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link to='/' className="locations__item-link">
                      <span>Cologne</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {/* <List offers={offers} lookView={'favorites__card'} imageView={'favorites__image-wrapper'} infoView={'favorites__card-info'} imageWidth={150} imageHeight={110}/> */}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
