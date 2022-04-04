import PlacesList from '../../components/places-list/places-list';
import {Offer} from '../../types/offer';

type OfferPageProps = {
  offers: Offer[];
}

function NearPlaces({offers}: OfferPageProps) :JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <PlacesList offers={offers.slice(0, 3)} lookView={'near-places__card'} imageView={'near-places__image-wrapper'}/>
      </div>
    </section>
  );
}

export default NearPlaces;
