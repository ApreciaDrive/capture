import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MaintainanceModel } from './../models/maintainance.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class MaintainanceService {

    private path = 'http://localhost:5000/api/Maintenances';
    private tokenHeader = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });

    constructor(private http: HttpClient) {
    }

    getMaintananceCustomers(): Promise<MaintainanceModel[]> {
        return this.http.get<MaintainanceModel[]>(this.path, { headers: this.tokenHeader }).toPromise();
    }

    getCustomerById(id: string): Promise<MaintainanceModel> {
        return this.http.get<MaintainanceModel>(`${this.path}/${id}`, { headers: this.tokenHeader }).toPromise();
    }

    updateAnnuityCustomer(data: MaintainanceModel) {
        return this.http.put<MaintainanceModel>(`${this.path}/${data.entityId}`, data, { headers: this.tokenHeader }).toPromise();
    }

    removeCustomer(id: string) {
        return this.http.delete<MaintainanceModel>(`${this.path}/${id}`, { headers: this.tokenHeader }).toPromise();
    }

    createMaintainanceCustomer(customer: MaintainanceModel) {
        return this.http.post<MaintainanceModel>(`${this.path}`, customer, { headers: this.tokenHeader }).toPromise();
    }
}
