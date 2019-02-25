import { DocumentReference } from 'angularfire2/firestore';

export interface AnnuityModel {
    id?: string;
    EntityId: string;
    EntityFullName: string;
    StartDate: string;
    AnniversaryDate: string;
    RenewalDate: string;
    AnnuityAmount: number;
    EntityRef?: DocumentReference;
}
