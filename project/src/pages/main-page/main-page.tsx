import {useState} from 'react';
import Header from '../../components/header/header';
import MainPageEmpty from '../../components/main-page-empty/main-page-empty';
import MainPageOffers from '../../components/main-with-offers/main-with-offers';
import Locations from '../../components/locations/locations';

import {Offer} from '../../types/offer';
// import { Points, Point} from '../../types/map';

type MainPageProps = {
  offers: Offer[];
  city: string
}

function Main({offers, city}: MainPageProps): JSX.Element {
  const cityLocation = offers[0].city.location;
  const [selectedPoint, setSelectedPoint] = useState(null as number | null);
  const sortedOffers = offers.filter((item) => item.city.name === city);
  const isListEmpty = sortedOffers.length === 0;
  const points = sortedOffers.map(({ id, location }) => ({ id, location }));
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations city={city}/>
        </div>
        <div className="cities">
          {isListEmpty
            ? <MainPageEmpty />
            : <MainPageOffers points={points} offers={sortedOffers} setSelectedPoint={setSelectedPoint} cityLocation={cityLocation} selectedPoint={selectedPoint}/>};
        </div>
      </main>
    </div>
  );
}

export default Main;
