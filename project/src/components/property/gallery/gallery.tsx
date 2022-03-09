import {Offer} from '../../../types/offer';

type GalleryProps = {
  offer: Offer;
}


function Gallery({offer} : GalleryProps) :JSX.Element {
  // eslint-disable-next-line no-console
  console.log(offer.images);
  return (
    <div className="property__gallery">
      <div className="property__image-wrapper">
        <img className="property__image" src={offer.images[0]} alt="Photo studio" />
      </div>
      <div className="property__image-wrapper">
        <img className="property__image" src={offer.images[1]} alt="Photo studio" />
      </div>
      <div className="property__image-wrapper">
        <img className="property__image" src={offer.images[2]} alt="Photo studio" />
      </div>
      <div className="property__image-wrapper">
        <img className="property__image" src={offer.images[3]} alt="Photo studio" />
      </div>
      <div className="property__image-wrapper">
        <img className="property__image" src={offer.images[4]} alt="Photo studio" />
      </div>
      <div className="property__image-wrapper">
        <img className="property__image" src={offer.images[5]} alt="Photo studio" />
      </div>
    </div>
  );
}

export default Gallery;
