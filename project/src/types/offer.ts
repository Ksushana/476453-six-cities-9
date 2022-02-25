export type Offer = {
  id: number;
  images: string[];
  premium: boolean;
  price: number;
  title: string;
  type: string;
  isFav: boolean;
  rating: string;
  rooms?: number;
  maxPers?: number;
};

export type Offers = Offer[];
