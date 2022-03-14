import {useRef, useEffect} from 'react';
import {Icon, Marker}  from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import {Points} from '../../types/map';
import { Offer, Offers } from '../../types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import useMap from '../../hooks/useMap';
import { MapType } from '../../types/map';

function getClassName(type: MapType ): string {
  const mapping = {
    main: 'cities__map map',
    offer: 'property__map map',
  };
  return mapping[type];
}

type MapProps = {
  cityOffers: Offers;
  selectedOffer: Offer;
  type: MapType,
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


function Map({cityOffers, selectedOffer, type}: MapProps): JSX.Element {
  const offerLocation = selectedOffer.location;
  const mapRef = useRef(null);
  const map = useMap(mapRef, offerLocation);
  const points = cityOffers.map(({ id, location }) => ({ id, location }));
  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            offerLocation !== undefined && point.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, offerLocation, selectedOffer.id]);
  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
      className={getClassName(type)}
    >
    </div>
  );
}

export default Map;
