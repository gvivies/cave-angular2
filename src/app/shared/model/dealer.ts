import { Region } from './region';

export class Dealer {
  id: string;
  name: string;
  street: string;
  zipCode: string;
  city: string;
  telephone: string;
  email: string;
  webSite: string;
  comment: string;
  latitude: string;
  longitude: string;
  region: Region;
  ownedBy: string;
}
