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

  navigate() {
    this.route.navigate(['/login']);
  }

}
