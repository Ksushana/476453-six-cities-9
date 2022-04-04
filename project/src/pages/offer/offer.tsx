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
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/useSelector';
import { useEffect } from 'react';
import { store } from '../../store';
import { fetchCommentsAction, fetchNearbyOffersAction, fetchOfferByIdAction } from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import NotFound from '../../components/not-found/not-found';
import { clearOffer, setRoomComments, setRoomOffers } from '../../store/action';

function Property(): JSX.Element {
  const { offersNearby, offer, isCurrentOfferLoaded } = useAppSelector((state) => state);
  const {id = ''} = useParams();

  useEffect(( )=> {
    store.dispatch(fetchOfferByIdAction(id));
    store.dispatch(fetchCommentsAction(id));
    store.dispatch(fetchNearbyOffersAction(id));
    return () => {
      store.dispatch(clearOffer(null));
      store.dispatch(setRoomOffers([]));
      store.dispatch(setRoomComments([]));
    };
  }, [id]);

  if (!isCurrentOfferLoaded) {
    return (<LoadingScreen />);
  }

  if(!offer) {
    return (<NotFound />);
  }

  const offersNearbyWithCurrent = [...offersNearby, offer ];

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <Gallery offer={offer}/>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium ? <div className="property__mark"><span>Premium</span></div> : ''}
              <Name offer={offer}/>
              <Rating offer={offer}/>
              <Features offer={offer}/>
              <Price offer={offer}/>
              <Inside offer={offer}/>
              <Host offer={offer}/>
              <Reviews hotelID={offer.id}/>
            </div>
          </div>
          <section className="property__map map" style={{maxWidth: '1144px', margin: '0 auto 50px'}}>
            <Map cityOffers={offersNearbyWithCurrent} selectedOffer={offer} type="offer"/>
          </section>
        </section>
        <div className="container">
          <NearPlaces offers={offersNearby}/>
        </div>
      </main>
    </div>
  );
}
export default Property;
