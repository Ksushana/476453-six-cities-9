import { useState } from 'react';
import { offersSortingVariants } from '../../const';
import {OffersSortingType} from '../../types/offer';

const getTitleByType = (type: OffersSortingType) => {
  const mapping = {
    none: 'Popular',
    byPriceUp: 'Price: low to high',
    byPriceDown: 'Price: high to low',
    byRatingDown: 'Top rated first',
  };
  return mapping[type];
};

type SortingProps = {
  setSorting: (type: OffersSortingType) => void,
  sortingType: OffersSortingType,
}


function Sorting({setSorting, sortingType}:SortingProps) : JSX.Element {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const handleClick = (type: OffersSortingType) => () => {
    setSorting(type);
    setIsMenuOpened(false);
  };
  const handleClickOnArrow = () => {
    setIsMenuOpened(true);
  };

  return (
    <form className="places__sorting" action="#-some-valid-path" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleClickOnArrow}>
        {getTitleByType(sortingType)}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${' places__options--opened'}`}>
        {isMenuOpened && offersSortingVariants.map((item) => (
          <li key={item} className="places__option" tabIndex={0} onClick={handleClick(item)}>{getTitleByType(item)}</li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
