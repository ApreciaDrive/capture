import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AnnuityModel } from '../models/annuity.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AnnuityService {

    private path = 'annuity_customers';
    annuityCollection: AngularFirestoreCollection<AnnuityModel>;
    annuitys: Observable<AnnuityModel[]>;

    constructor(private afs: AngularFirestore) {
        this.annuityCollection = this.afs.collection(this.path, ref => ref.orderBy('EntityFullName'));
    }

    private getRefToCollection() {
        return this.annuityCollection.snapshotChanges().pipe(
            map(changes => {
                return changes.map(a => {
                    const data = a.payload.doc.data() as AnnuityModel;
                    data.id = a.payload.doc.id;
                    data.EntityRef = a.payload.doc.ref;
                    return data;
                });
            })
        );
    }

    getAnnuityCustomers(): Observable<AnnuityModel[]> {
        this.annuitys = this.getRefToCollection();
        return this.annuitys;
    }

    createAnnuityCustomer(customer: AnnuityModel) {
        return this.annuityCollection.add(customer);
    }
}
