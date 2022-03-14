import {useRef, useEffect} from 'react';
import {Icon, Marker}  from 'leaflet';
import 'leaflet/dist/leaflet.css';
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

type MapProps = {
  cityOffers: Offers;
  selectedOffer: Offer;
  type: MapType,
};


function Map({cityOffers, selectedOffer, type}: MapProps): JSX.Element {
  const offerLocation = selectedOffer.location;
  const points = cityOffers.map(({ id, location }) => ({ id, location }));
  const selectedPoint = selectedOffer.id;
  const mapRef = useRef(null);
  const map = useMap(mapRef, offerLocation);
  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);
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
