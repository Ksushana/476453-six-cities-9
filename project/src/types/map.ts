import { Offer } from './offer';

export type City = {
  title: string;
  offers: Offer,
};

export type Point = Pick<Offer, 'id' | 'location'>;

export type Points = Point[];
