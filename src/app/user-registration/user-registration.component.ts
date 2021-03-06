import { UserModel } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { ToastrManager, Toastr } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user: UserModel = {
    email: '',
    userName: '',
    fullName: '',
    password: ''
  };
  formValid: boolean;

  constructor(
    private userService: UserService,
    public toastr: ToastrManager,
    private route: Router,
  ) { }

  ngOnInit() {
  }

  async onSubmit(data) {
    this.user.userName = data.value.Username;
    this.user.fullName = `${data.value.FirstName} ${data.value.LastName}`;
    this.user.email = data.value.Email;
    if (data.value.Password === data.value.ConfirmPassword) {
      this.user.password = data.value.Password;
      await this.userService.createUser(this.user)
        .then(res => {
          if (res !== null) {
            this.toastr.successToastr('Registration Completed, Please login', 'Success!');
            this.route.navigate(['/login']);
          }
        })
        .catch(err => {
          this.toastr.errorToastr(err.message, 'Error!');
        });
    } else {
      this.toastr.errorToastr('Password must match Confirm Password', 'Error!');
    }
  }

  onFormChanged(formData) {
    if (
      formData.value.FirstName === undefined ||
      formData.value.LastName === undefined ||
      formData.value.Username === undefined ||
      formData.value.Password === undefined ||
      formData.value.ConfirmPassword === undefined ||
      formData.value.Email === undefined
    ) {
      return;
    }

    if (formData.value.Username.length !== 0) {
      if (formData.value.Email.length >= 5) {
        if (formData.value.firstname.length !== 0) {
          if (formData.value.Lastname.length !== 0) {
            if (formData.value.Password.length === formData.value.ConfirmPassword.length) {
              this.formValid = true;
              return;
            } else {
              this.formValid = false;
            }
          } else {
            this.formValid = false;
          }
        } else {
          this.formValid = false;
        }
      } else {
        this.formValid = false;
      }
    } else {
      this.formValid = false;
    }
  }

  navigate() {
    this.route.navigate(['/login']);
  }

}
