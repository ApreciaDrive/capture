import { Injectable } from '@angular/core';
import { AnnuityModel } from '../models/annuity.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AnnuityService {

    private path = 'http://localhost:5000/api/Annuities';
    private tokenHeader = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });

    constructor(private http: HttpClient) {
    }

    getAnnuityCustomers(): Observable<AnnuityModel[]> {
        return this.http.get<AnnuityModel[]>(this.path, { headers: this.tokenHeader});
    }

    getCustomerById(id: string): Promise<AnnuityModel> {
        return this.http.get<AnnuityModel>(`${this.path}/${id}`, { headers: this.tokenHeader }).toPromise();
    }

    updateAnnuityCustomer(data: AnnuityModel) {
        return this.http.put<AnnuityModel>(`${this.path}/${data.entityId}`, data, { headers: this.tokenHeader }).toPromise();
    }

    removeCustomer(id: string) {
        return this.http.delete<AnnuityModel>(`${this.path}/${id}`, { headers: this.tokenHeader }).toPromise();
    }

   async createAnnuityCustomer(customer: AnnuityModel) {
       return await this.http.post<AnnuityModel>(`${this.path}`, customer, { headers: this.tokenHeader }).toPromise();
    }
}
