import { Injectable } from '@angular/core';
import { AnnuityModel } from '../models/annuity.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AnnuityService {

    private path = 'http://localhost:5000/api/Annuities';

    constructor(private http: HttpClient) {
    }

    getAnnuityCustomers(): Observable<AnnuityModel[]> {
        return this.http.get<AnnuityModel[]>(this.path);
    }

    getCustomerById(id: string): Promise<AnnuityModel> {
        return this.http.get<AnnuityModel>(`${this.path}/${id}`).toPromise();
    }

    updateAnnuityCustomer(data: AnnuityModel) {
        return this.http.put<AnnuityModel>(`${this.path}/${data.entityId}`, data).toPromise();
    }

    removeCustomer(id: string) {
        return this.http.delete<AnnuityModel>(`${this.path}/${id}`).toPromise();
    }

   async createAnnuityCustomer(customer: AnnuityModel) {
       return await this.http.post<AnnuityModel>(`${this.path}`, customer).toPromise();
    }
}
