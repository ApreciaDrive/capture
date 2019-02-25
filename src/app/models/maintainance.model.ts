import { DocumentReference } from 'angularfire2/firestore';

export interface MaintainanceModel {
    id?: string;
    EntityId: string;
    EntityFullName: string;
    Product: string;
    ProductCategory: string;
    Item: string;
    Qty: number;
    UnitPrice: number;
    Value: number;
    YearlyMaintainance: string;
    EntityRef?: DocumentReference;
}
