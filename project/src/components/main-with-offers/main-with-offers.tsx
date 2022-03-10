import PlacesList from '../../components/places-list/places-list';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/useState';
import {Offer, Location} from '../../types/offer';

type MainPageProps = {
  offers: Offer[];
  city: Location,
  points: { id: number, location: Location }[],
  selectedPoint: number | null,
  setSelectedPoint: (x: number | null) => void,
}

function MainPageOffers({offers, city, points, selectedPoint, setSelectedPoint } : MainPageProps): JSX.Element {
  const activeCity = useAppSelector((state) => state.location);
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity}</b>
        <Sorting />
        <div className="cities__places-list places__list tabs__content">
          <PlacesList offers={offers} lookView={'cities__place-card'} imageView={'cities__image-wrapper'} onListItemHover={setSelectedPoint} points={points}/>
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map points={points} city={city} selectedPoint={selectedPoint}/>
        </section>
      </div>
    </div>
  );
}

export default MainPageOffers;
