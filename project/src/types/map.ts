import { Offer } from './offer';

export type MapType = 'main' | 'offer';

export type Point = Pick<Offer, 'id' | 'location'>;
