import Header from '../../components/header/header';
import Gallery  from '../../components/property/gallery/gallery';
import NearPlaces from '../../components/near-places/near-places';
import Features from '../../components/property/features/features';
import Host from '../../components/property/host/host';
import Inside from '../../components/property/inside/inside';
import Name from '../../components/property/name/name';
import Price from '../../components/property/price/price';
import Rating from '../../components/property/rating/rating';
import Reviews from '../../components/property/reviews/reviews';
import {Review} from '../../types/review';
import Map from '../../components/map/map';
import {Offer, Location} from '../../types/offer';
// import {City, Points} from '../../types/map';
import { useParams } from 'react-router-dom';

type OfferPageProps = {
  offers: Offer[];
  cityLocation: Location,
  reviews: Review[];
  points: { id: number, location: Location }[],
  selectedPoint: number | null,
}

function Property({reviews, offers, cityLocation, points, selectedPoint}: OfferPageProps): JSX.Element {
  const {id} = useParams();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const offerItem = offers.find((o) => o.id === Number(id))!;
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <Gallery  offer={offerItem}/>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offerItem.isPremium ? <div className="property__mark"><span>Premium</span></div> : ''}
              <Name offer={offerItem}/>
              <Rating offer={offerItem}/>
              <Features offer={offerItem}/>
              <Price  offer={offerItem}/>
              <Inside />
              <Host />
              <Reviews reviews={reviews}/>
            </div>
          </div>
          <section className="property__map map" style={{maxWidth: '1144px', margin: '0 auto 50px'}}>
            <Map points={points} city={cityLocation} selectedPoint={selectedPoint}/>
          </section>
        </section>
        <div className="container">
          <NearPlaces offers={offers} />
        </div>
      </main>
    </div>
  );
}

export default Property;
