import { Offer } from "./types/offer";

export const getFavoriteOffers = (offers: Offer[]) => offers.filter((offer) => offer.isFavorite);