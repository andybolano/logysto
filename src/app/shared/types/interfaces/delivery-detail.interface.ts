import { Contact } from "./contact.interface";
import { Evidence } from "./evidence.interface";
import { Messenger } from "./messenger.interface";
import { Novelty } from "./novelty.interface";
import { Trace } from "./trace.interface";
import { Location } from "./location.interface";

export interface DeliveryDetail {
  vueltap_guide: number;
  order_number: string;
  date: string;
  status: string;
  product_barcode_scan: string;
  raise_cash: number;
  trace: Trace[];
  messenger: Messenger;
  locations: Location[];
  contact: Contact;
  evidence: Evidence;
  novelty: Novelty;
}
