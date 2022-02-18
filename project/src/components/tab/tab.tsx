import {Link} from 'react-router-dom';

type TabProps = {
  text: string,
  isActive?: boolean
}

function Tab({text, isActive}: TabProps ): JSX.Element {
  return (
    <Link to='/' className={`locations__item-link tabs__item  ${isActive ? 'tabs__item--active' : ''}`}>
      <span>{text}</span>
    </Link>
  );
}
export default Tab;
