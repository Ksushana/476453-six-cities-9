import {useState} from 'react';
import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/offer';
import {Points} from '../../types/map';

type PlacesToStayProps = {
  offers: Offer[],
  lookView?: string;
  imageView?: string;
  infoView?: string;
  imageWidth?: number;
  imageHeight?: number;
  points: Points;
  onListItemHover: (listItemID: number) => void;
};

function PlacesList({offers, lookView, imageView, infoView, imageWidth, imageHeight,points, onListItemHover}: PlacesToStayProps): JSX.Element {
  const [chosenOffer, setChosenOffer] = useState(0);
  function onCardMouseEnter(evt: React.MouseEvent<HTMLElement>) {
    if (evt.currentTarget instanceof HTMLElement) {
      setChosenOffer(Number(evt.currentTarget.dataset.id));
    }
    onListItemHover(Number(evt.currentTarget.dataset.id));
  }
  return (
    <>
      {offers.map((offer) => <PlaceCard key={offer.id} id={offer.id} isChosen={offer.id === chosenOffer} price={offer.price} name={offer.title} rating={offer.rating} type={offer.type} premium={offer.isPremium} image={offer.previewImage} imageLook={imageView} cardLook={lookView} infoLook={infoView} imageHeight={imageHeight} imageWidth={imageWidth} onMouseEnter={onCardMouseEnter} addedToFavorite={false}/>)}
    </>
  );
}

export default PlacesList;
