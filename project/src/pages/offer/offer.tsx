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
import Map from '../../components/property/map/map';

function Property(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <Gallery />
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <Name />
              <Rating />
              <Features />
              <Price />
              <Inside />
              <Host />
              <Reviews />
            </div>
          </div>
          <Map />
        </section>
        <div className="container">
          <NearPlaces />
        </div>
      </main>
    </div>
  );
}

export default Property;
