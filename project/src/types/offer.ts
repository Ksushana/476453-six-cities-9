import { UserType } from './state';

export type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
}
export type Comment = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: Omit<UserType, 'email' | 'token'>,
}

export type City = {
  location: Location,
  name: string,
}

export type Host = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
}

export type Offer = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: Host,
  id: number
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: Location,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
};

export type CommentData = {
  comment: string;
  rating: number;
};

export type AddComment = {
  hotelID: number;
  commentData: CommentData;
}

export type LocationsDataType = {
  cityName: string,
  offers: Offer[],
}

export type ToggleFavoriteStatus = {
  id: number;
  status: number;
}

export type OffersSortingType = 'none' | 'byPriceUp' | 'byPriceDown' | 'byRatingDown';

export type Offers = Offer[];
export type Comments = Comment[];
export type CommentFormDataType = { rating: number | null, comment: string };
