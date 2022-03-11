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
import {Offer} from '../../types/offer';
import { useParams } from 'react-router-dom';

type OfferPageProps = {
  offers: Offer[];
  reviews: Review[];
}

function Property({reviews, offers}: OfferPageProps): JSX.Element {
  const URLid = useParams().id;
  const offerItem = offers.find((o) => o.id === Number(URLid));
  if (!offerItem) {
    return (<div>Oooops!</div>);
  }
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
              <Inside  offer={offerItem}/>
              <Host offer={offerItem}/>
              <Reviews reviews={reviews}/>
            </div>
          </div>
          <section className="property__map map" style={{maxWidth: '1144px', margin: '0 auto 50px'}}>
            <Map cityOffers={offers} selectedOffer={offerItem}/>
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
