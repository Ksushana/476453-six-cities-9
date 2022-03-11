import {useRef, useEffect} from 'react';
import {Icon, Marker}  from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import {Points} from '../../types/map';
import { Offer, Offers } from '../../types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import useMap from '../../hooks/useMap';

type MapProps = {
  cityOffers: Offers;
  selectedOffer: Offer;
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
function Map({cityOffers, selectedOffer}: MapProps): JSX.Element {
  const offerCity = selectedOffer.location;
  const mapRef = useRef(null);
  const map = useMap(mapRef, offerCity);
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
            offerCity !== undefined && point.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, offerCity, selectedOffer.id]);
  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
