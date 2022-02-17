import Header from '../../components/header/header';
import PlaceCard from '../../components/place-card/place-card';
import Tab from '../../components/tab/tab';

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
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <Tab text='Paris' />
              </li>
              <li className="locations__item">
                <Tab text='Cologne' />
              </li>
              <li className="locations__item">
                <Tab text='Brussels' />
              </li>
              <li className="locations__item">
                <Tab text='Amsterdam' isActive />
              </li>
              <li className="locations__item">
                <Tab text='Hamburg' />
              </li>
              <li className="locations__item">
                <Tab text='ColDusseldorfogne' />
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesToStay} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <PlaceCard price={120} name="Beautiful &amp; luxurious apartment at great location" rating="80%" type="Apartment" premium image="img/apartment-01.jpg" cities/>
                <PlaceCard price={80} name="Wood and stone place" rating="80%" type="Private room" premium={false} image="img/room.jpg" cities addedToFav/>
                <PlaceCard price={132} name="Canal View Prinsengracht" rating="80%" type="Apartment" premium={false} image="img/apartment-02.jpg" cities/>
                <PlaceCard price={180} name="Nice, cozy, warm big bed apartment" rating="100%" type="Apartment" premium image="img/apartment-03.jpg" cities/>
                <PlaceCard price={80} name="Wood and stone place" rating="80%" type="Private room" premium={false} image="img/room.jpg" cities addedToFav/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
