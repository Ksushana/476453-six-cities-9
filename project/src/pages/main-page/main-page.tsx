import Header from '../../components/header/header';
import PlacesList from '../../components/places-list/places-list';
import Locations from '../../components/locations/locations';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import {Offer} from '../../types/offer';

type MainPageProps = {
  placesToStay: number;
  offers: Offer[];
}

function Main({placesToStay, offers}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesToStay} places to stay in Amsterdam</b>
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                <PlacesList offers={offers} lookView={'cities__place-card'} imageView={'cities__image-wrapper'}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
