import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { UserService } from '../service/user.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = {
    email: '',
    userName: '',
    fullName: '',
    password: ''
  };
  constructor(
    private userService: UserService,
    public toastr: ToastrManager,
    private route: Router,
  ) { }

  ngOnInit() {
  }
  async onSubmit(data) {
    this.user.email = data.value.Email;
    if (data.value.Password !== null) {
      this.user.password = data.value.Password;
      await this.userService.login(this.user)
        .then(res => {
          if (res !== null) {
            localStorage.setItem('token', res.token);
            this.route.navigate(['']);
            this.toastr.successToastr('Login Successful', 'Success!');
          }
        })
        .catch(err => {
          if (err.status !== 0) {
            this.toastr.errorToastr(err.error.value.message, `${err.statusText}`);
          } else {
            this.toastr.errorToastr('Please check your internet connection.', `${err.statusText}`);
          }
        });
    } else {
      this.toastr.errorToastr('Password must match Confirm Password', 'Error!');
    }
  }

  Register() {
    this.route.navigate(['/registration']);
  }
}
