import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AnnuityModel } from '../models/annuity.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MaintainanceModel } from '../models/maintainance.model';

@Injectable({
    providedIn: 'root'
})

export class MaintainanceService {

    private path = 'maintainace_customers';
    maintainanceCollection: AngularFirestoreCollection<MaintainanceModel>;
    maintainance: Observable<MaintainanceModel[]>;

    constructor(private afs: AngularFirestore) {
        this.maintainanceCollection = this.afs.collection(this.path, ref => ref.orderBy('EntityFullName'));
    }

    private getRefToCollection() {
        return this.maintainanceCollection.snapshotChanges().pipe(
            map(changes => {
                return changes.map(a => {
                    const data = a.payload.doc.data() as MaintainanceModel;
                    data.id = a.payload.doc.id;
                    data.EntityRef = a.payload.doc.ref;
                    return data;
                });
            })
        );
    }

    getMaintananceCustomers(): Observable<MaintainanceModel[]> {
        this.maintainance = this.getRefToCollection();
        return this.maintainance;
    }

    createMaintainanceCustomer(customer: MaintainanceModel) {
        return this.maintainanceCollection.add(customer);
    }
}
