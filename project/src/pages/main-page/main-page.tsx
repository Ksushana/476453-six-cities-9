import Header from '../../components/header/header';
import PlaceCard from '../../components/place-card/place-card';
import Locations from '../../components/locations/locations';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';

type MainPageProps = {
  placesToStay: number;
}

function Main({placesToStay}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesToStay} places to stay in Amsterdam</b>
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                <PlaceCard price={120} name="Beautiful &amp; luxurious apartment at great location" rating="80%" type="Apartment" premium image="img/apartment-01.jpg" cities/>
                <PlaceCard price={80} name="Wood and stone place" rating="80%" type="Private room" premium={false} image="img/room.jpg" cities addedToFav/>
                <PlaceCard price={132} name="Canal View Prinsengracht" rating="80%" type="Apartment" premium={false} image="img/apartment-02.jpg" cities/>
                <PlaceCard price={180} name="Nice, cozy, warm big bed apartment" rating="100%" type="Apartment" premium image="img/apartment-03.jpg" cities/>
                <PlaceCard price={80} name="Wood and stone place" rating="80%" type="Private room" premium={false} image="img/room.jpg" cities addedToFav/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
