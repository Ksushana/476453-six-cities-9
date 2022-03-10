import HostUser from '../host-user/host-user';
import {Offer} from '../../../types/offer';

type HostProps = {
  offer: Offer;
}

function Host({offer}: HostProps): JSX.Element {
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <HostUser offer={offer}/>
      <div className="property__description">
        <p className="property__text">
          {offer.description}
        </p>
        {/* <p className="property__text">
          An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
        </p> */}
      </div>
    </div>
  );
}

export default Host;
