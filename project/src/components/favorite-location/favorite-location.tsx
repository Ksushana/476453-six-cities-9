
import { LocationsDataType, Offer } from '../../types/offer';
import FavoriteList from '../favorite-list/favorite-list';
import { setCity } from '../../store/action';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useDispatch';

function FavoriteLocation(props: { locationData: LocationsDataType }) {
  const dispatch = useAppDispatch();
  function handleLocationClick(mainLocation: string) {
    return () => {
      dispatch(setCity(mainLocation));
    };
  }
  const { cityName, offers } = props.locationData;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item" onClick={handleLocationClick(cityName)}>
          <Link className="locations__item-link" to="/">
            <span>{cityName}</span>
          </Link>
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
