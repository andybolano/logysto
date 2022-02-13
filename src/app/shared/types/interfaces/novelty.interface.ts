import { Pickup } from "./pickup.interface";

export interface Delivery {
  descript: string;
  date: string;
}

export interface Novelty {
  pickup: Pickup;
  delivery: Delivery;
}
