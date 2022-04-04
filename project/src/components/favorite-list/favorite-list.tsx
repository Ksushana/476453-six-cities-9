import { Offer, Offers } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type FavoritePlacesToStayProps = {
  offers: Offers,
  lookView: string;
  imageView: string;
  infoView?: string;
  imageWidth?: number;
  imageHeight?: number;
  onSelected: (offer: Offer) => void,
};

function FavoriteList({offers, lookView, imageView, infoView, imageWidth, imageHeight, onSelected}: FavoritePlacesToStayProps) {
  const handlePlaceSelected = (offer: Offer) => {
    // onSelected(offer);
  };
  return (
    <div className="favorites__places">
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} id={offer.id} price={offer.price} name={offer.title} rating={offer.rating} type={offer.type} premium={offer.isPremium} image={offer.previewImage} imageLook={imageView} cardLook={lookView} infoLook={infoView} imageHeight={imageHeight} imageWidth={imageWidth} onSelected={handlePlaceSelected} addedToFavorite={false}/>)}
    </div>
  );
}

export default FavoriteList;
