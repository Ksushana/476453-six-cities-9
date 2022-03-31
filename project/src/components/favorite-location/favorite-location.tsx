
import { LocationsDataType, Offer } from '../../types/offer';
import FavoriteList from '../favorite-list/favorite-list';

function FavoriteLocation(props: { locationData: LocationsDataType }) {
  const { cityName, offers } = props.locationData;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#header__nav">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <FavoriteList offers={offers} lookView={'favorites__card'} imageView={'favorites__image-wrapper'} imageHeight={110} imageWidth={150} infoView={'favorites__card-info'} onSelected={function (offer: Offer): void {
        throw new Error('Function not implemented.');
      } }
      />
    </li>
  );
}

export default FavoriteLocation;
