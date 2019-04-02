import { UserModel } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private path = 'http://localhost:5000/api/ApplicationUser/Register';

  constructor(private http: HttpClient) {}

    async login(user: UserModel) {
        return await this.http
            .post<any>('http://localhost:5000/api/ApplicationUser/Login', user)
            .toPromise();
    }
    async createUser(user: UserModel) {
    return await this.http
        .post<UserModel>(`${this.path}`, user)
      .toPromise();
  }
}
