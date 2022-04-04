import { useAppDispatch } from '../../hooks/useDispatch';
import { setCity } from '../../store/action';
import { mainLocations } from '../../const';
import {Link} from 'react-router-dom';
import { useAppSelector } from '../../hooks/useSelector';

function Locations(): JSX.Element {
  const { city } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  function handleLocationClick(mainLocation: string) {
    return () => {
      dispatch(setCity(mainLocation));
    };
  }
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {mainLocations.map((mainLocation) => {
          const isActive = `locations__item-link tabs__item ${mainLocation === city && ' tabs__item--active'}`;
          return (
            <li key={mainLocation} className="locations__item" onClick={handleLocationClick(mainLocation)}>
              <Link to='/' className={isActive}>
                <span>{mainLocation}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Locations;
