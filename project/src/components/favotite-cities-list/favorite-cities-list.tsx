import { Offer, Offers } from '../../types/offer';
import FavoriteCity from '../favorite-city/favorite-city';

type OffersProps = { offers: Offer[] };

function FavoriteCitiesList(props: OffersProps) {
  const { offers } = props;
  const sortedOffers = offers.reduce((acc: { [cityName: string]: Offers}, offer: Offer) => {
    const cityName = offer.city.name;
    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(offer);
    return acc;
  }, {});
  const locationsData = Object.keys(sortedOffers).sort()
    .map((cityName: string) => ({ cityName, offers: sortedOffers[cityName]}));
  return (
    <><h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {locationsData.map((location) => (
          <FavoriteCity key={location.cityName} locationData={location} />
        ))}
      </ul>
    </>
  );
}

export default FavoriteCitiesList;
