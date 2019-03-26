import { DocumentReference } from 'angularfire2/firestore';

export interface AnnuityModel {
    entityId: string;
    entityFullName: string;
    startDate: Date;
    anniversaryDate: Date;
    renewalDate: Date;
    annuityAmount: number;
}
