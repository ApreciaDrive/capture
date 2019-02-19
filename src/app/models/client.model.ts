import { DocumentReference } from 'angularfire2/firestore';

export interface ClientModel {
  clientId?: string;
  customer: string;
  birthday: string;
  contactPerson: string;
  accManager: string;
  product: string;
  item: string;
  streetAddress: string;
  surburb: string;
  town: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
  clientRef?: DocumentReference;
}
