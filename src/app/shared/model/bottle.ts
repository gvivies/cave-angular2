import { Dealer } from './dealer';
import { Classification } from './classification';
import { Wine } from './wine';
import { Containing } from './containing';

export class Bottle {

  id: string;
  name: string;
  dealer: Dealer;
  wine: Wine;
  classification: Classification ;
  year: number;
  yearMin: number;
  yearMax: number;
  quantity: number;
  purchaseDate: Date;
  price: number;
  comment: string;
  containing: Containing;
  ordered: boolean;
  ownedBy: string;

}
