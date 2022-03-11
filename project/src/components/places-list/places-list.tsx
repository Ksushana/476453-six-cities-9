import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offer';

type PlacesToStayProps = {
  offers: Offer[],
  lookView?: string;
  imageView?: string;
  infoView?: string;
  imageWidth?: number;
  imageHeight?: number;
  onSelected: (offer: Offer) => void,
};

function PlacesList({offers, lookView, imageView, infoView, imageWidth, imageHeight, onSelected}: PlacesToStayProps): JSX.Element {
  const handlePlaceSelected = (offer: Offer) => {
    onSelected(offer);
  };

  return (
    <>
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} id={offer.id} price={offer.price} name={offer.title} rating={offer.rating} type={offer.type} premium={offer.isPremium} image={offer.previewImage} imageLook={imageView} cardLook={lookView} infoLook={infoView} imageHeight={imageHeight} imageWidth={imageWidth} onSelected={handlePlaceSelected} addedToFavorite={false}/>)}
    </>
  );
}

export default PlacesList;
