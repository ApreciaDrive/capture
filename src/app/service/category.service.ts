import { CategoryModel } from './../models/categories.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private path =
    'https://inteleqtcapture20190403040406.azurewebsites.net/api/Categories';

  constructor(private http: HttpClient) {}

  getCategories(): Promise<CategoryModel[]> {
    const data = this.http.get<CategoryModel[]>(this.path).toPromise();
    return data;
  }

  getCategoryById(id: number): Promise<CategoryModel> {
    return this.http.get<CategoryModel>(`${this.path}/${id}`).toPromise();
  }
}
