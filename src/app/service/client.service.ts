import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {ClientModel} from '../models/client.model';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private path = 'client';
    clientCollection: AngularFirestoreCollection<ClientModel>;
    clients: Observable<ClientModel[]>;

  constructor(private afs: AngularFirestore) {
      this.clientCollection = this.afs.collection(this.path, ref => ref.orderBy('customer'));
  }

  private getRefToCollection() {
      return this.clientCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
            const data = a.payload.doc.data() as ClientModel;
          data.clientId = a.payload.doc.id;
          data.clientRef = a.payload.doc.ref;
          return data;
        });
      })
    );
  }

    getClients(): Observable<ClientModel[]> {
    this.clients = this.getRefToCollection();
    return this.clients;
  }

    createClient(client: ClientModel) {
    return this.clientCollection.add(client);
  }
}
