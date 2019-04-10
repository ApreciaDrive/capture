import { UserModel } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private path = 'https://inteleqtcapture20190403040406.azurewebsites.net/api/ApplicationUser/Register';

  constructor(private http: HttpClient) {}

    async login(user: UserModel) {
        return await this.http
          .post<any>('https://inteleqtcapture20190403040406.azurewebsites.net/api/ApplicationUser/Login', user)
            .toPromise();
    }
    async createUser(user: UserModel) {
    return await this.http
        .post<UserModel>(`${this.path}`, user)
      .toPromise();
  }
}
