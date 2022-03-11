// import {useState} from 'react';
import Header from '../../components/header/header';
import MainPageEmpty from '../../components/main-page-empty/main-page-empty';
import MainPageOffers from '../../components/main-with-offers/main-with-offers';
import Locations from '../../components/locations/locations';
import { useAppSelector } from '../../hooks/useState';

function Main(): JSX.Element {
  const { offers, city } = useAppSelector((state) => state);
  const cityOffers = offers.filter((item) => item.city.name === city);
  const isListEmpty = cityOffers.length === 0;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations/>
        </div>
        <div className="cities">
          {isListEmpty
            ? <MainPageEmpty />
            : <MainPageOffers offers={cityOffers}/>};
        </div>
      </main>
    </div>
  );
}

export default Main;
