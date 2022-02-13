import { Deliver } from './deliver.interface';
import { Pickup } from './pickup.interface';


export interface Evidence {
  pickup: Pickup;
  deliver: Deliver[];
  returned: unknown[];
}
