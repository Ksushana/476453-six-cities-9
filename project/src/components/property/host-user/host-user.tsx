import {Offer} from '../../../types/offer';

type HostProps = {
  offer: Offer;
}

function HostUser({offer}: HostProps) :JSX.Element {
  return (
    <div className="property__host-user user">
      <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
        <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
      </div>
      <span className="property__user-name">
        {offer.host.name}
      </span>
      <span className="property__user-status">
        {offer.host.isPro ? 'Pro' : ''}
      </span>
    </div>
  );
}

export default HostUser;
