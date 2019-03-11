import { MaintainanceModel } from './../models/maintainance.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AnnuityModel } from '../models/annuity.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MaintainanceService {

    private path = 'maintainace_customers';
    maintainanceCollection: AngularFirestoreCollection<MaintainanceModel>;
    maintainance: Observable<MaintainanceModel[]>;
    maintainanceDocument: AngularFirestoreDocument;

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

    getCustomerByEmail(query: string): Observable<MaintainanceModel> {
        return this.afs.doc<MaintainanceModel>(`${this.path}/` + query).snapshotChanges()
            .pipe(
                map(changes => {
                    const data = changes.payload.data() as MaintainanceModel;
                    data.id = changes.payload.id;
                    return data;
                })
            );
    }

    updateAnnuityCustomer(data: MaintainanceModel) {
        this.maintainanceDocument = this.afs.doc(`${this.path}/${data.id}`);
        return this.maintainanceDocument.update(data);
    }

    removeCustomer(data: MaintainanceModel) {
        this.maintainanceDocument = this.afs.doc(`${this.path}/${data.id}`);
        return this.maintainanceDocument.delete();
    }

    createMaintainanceCustomer(customer: MaintainanceModel) {
        return this.maintainanceCollection.add(customer);
    }
}
