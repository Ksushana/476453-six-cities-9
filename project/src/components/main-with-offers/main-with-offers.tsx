import PlacesList from '../../components/places-list/places-list';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import {Offer} from '../../types/offer';
import { useEffect, useState } from 'react';
import {OffersSortingType} from '../../types/offer';

type MainPageProps = {
  offers: Offer[];
  activeCity: string;
}

function getCompareFunction(type: OffersSortingType): (a: Offer, b: Offer) => number {
  const mapping = {
    none: () => 0,
    byPriceUp: (a: Offer, b: Offer) => {
      if (a.price === b.price) {
        return 0;
      }
      return a.price > b.price ? 1 : -1;
    },
    byPriceDown: (a: Offer, b: Offer) => {
      if (a.price === b.price) {
        return 0;
      }
      return a.price < b.price ? 1 : -1;
    },
    byRatingDown: (a: Offer, b: Offer) => {
      if (a.rating === b.rating) {
        return 0;
      }
      return a.rating > b.rating ? -1 : 1;
    },
  };
  return mapping[type];
}

function MainPageOffers({offers, activeCity} : MainPageProps): JSX.Element {
  const [sortingType, setSortingType] = useState<OffersSortingType>('none');

  const sortedOffers = [...offers].sort(getCompareFunction(sortingType));
  const [chosenOffer, setChosenOffer] = useState(offers[0]);
  useEffect(( )=> {
    setChosenOffer(offers[0]);
  },[offers]);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity}</b>
        <Sorting  setSorting={setSortingType} sortingType={sortingType}  />
        <div className="cities__places-list places__list tabs__content">
          <PlacesList offers={sortedOffers} lookView={'cities__place-card'} imageView={'cities__image-wrapper'} onSelected={setChosenOffer}/>
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map cityOffers={sortedOffers} selectedOffer={chosenOffer} type="main"/>
        </section>
      </div>
    </div>
  );
}

export default MainPageOffers;
