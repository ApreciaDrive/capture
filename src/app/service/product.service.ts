import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    private path = 'https://inteleqtcapture20190403040406.azurewebsites.net/api/Products';

  constructor(private http: HttpClient) {}

    getProducts(): Promise<ProductModel[]> {
        const data =  this.http.get<ProductModel[]>(this.path).toPromise();
        return data;
    }

  getProductById(id: number) {
    return this.http.get<ProductModel>(`${this.path}/${id}`).toPromise();
  }
}
