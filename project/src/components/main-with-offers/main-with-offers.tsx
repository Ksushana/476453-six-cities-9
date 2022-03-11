import PlacesList from '../../components/places-list/places-list';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/useState';
import {Offer} from '../../types/offer';
import { useState } from 'react';

type MainPageProps = {
  offers: Offer[];
}

function MainPageOffers({offers} : MainPageProps): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const [chosenOffer, setChosenOffer] = useState(offers[0]);
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity}</b>
        <Sorting />
        <div className="cities__places-list places__list tabs__content">
          <PlacesList offers={offers} lookView={'cities__place-card'} imageView={'cities__image-wrapper'} onSelected={setChosenOffer}/>
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map cityOffers={offers} selectedOffer={chosenOffer}/>
        </section>
      </div>
    </div>
  );
}

export default MainPageOffers;
