import Tab from '../../components/tab/tab';

function Locations(): JSX.Element {
  return (
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
  );
}

export default Locations;
