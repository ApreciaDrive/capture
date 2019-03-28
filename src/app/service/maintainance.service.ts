import { HttpClient } from '@angular/common/http';
import { MaintainanceModel } from './../models/maintainance.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class MaintainanceService {

    private path = 'http://localhost:5000/api/Maintenances';

    constructor(private http: HttpClient) {
    }

    getMaintananceCustomers(): Promise<MaintainanceModel[]> {
        return this.http.get<MaintainanceModel[]>(this.path).toPromise();
    }

    getCustomerById(id: string): Promise<MaintainanceModel> {
        return this.http.get<MaintainanceModel>(`${this.path}/${id}`).toPromise();
    }

    updateAnnuityCustomer(data: MaintainanceModel) {
        return this.http.put<MaintainanceModel>(`${this.path}/${data.entityId}`, data).toPromise();
    }

    removeCustomer(id: string) {
        return this.http.delete<MaintainanceModel>(`${this.path}/${id}`).toPromise();
    }

    createMaintainanceCustomer(customer: MaintainanceModel) {
        return this.http.post<MaintainanceModel>(`${this.path}`, customer).toPromise();
    }
}
