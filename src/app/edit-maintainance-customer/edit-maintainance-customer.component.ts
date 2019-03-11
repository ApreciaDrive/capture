import { MaintainanceModel } from './../models/maintainance.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { isNullOrUndefined } from 'util';
import { MaintainanceService } from '../service/maintainance.service';

@Component({
  selector: 'app-edit-maintainance-customer',
  templateUrl: './edit-maintainance-customer.component.html',
  styleUrls: ['./edit-maintainance-customer.component.css']
})
export class EditMaintainanceCustomerComponent implements OnInit {
customer = {} as MaintainanceModel;

  constructor(
    private customerService: MaintainanceService,
    private route: Router,
    private activeroute: ActivatedRoute,
    private toastr: ToastrManager, ) { }

  ngOnInit() {
    this.activeroute.queryParams.subscribe(params => {
      const id = params['id'];
      if (!isNullOrUndefined(id)) {
        this.customerService.getCustomerByEmail(id).subscribe(users => {
          this.customer = users;
          console.log(this.customer);
        });
      }
    });
  }

  onSubmit() {
    this.customerService.updateAnnuityCustomer(this.customer)
      .then((_) => {
        this.route.navigate(['/maintainance']);
        this.toastr.successToastr('customer updated successfully', 'Success!');
      }).catch(error => {
        this.toastr.errorToastr(error, 'Error!');
      });
  }

  deleteCustomer() {
    this.customerService.removeCustomer(this.customer)
      .then((_) => {
        this.route.navigate(['/maintainance']);
        this.toastr.successToastr('customer successfully removed', 'Success!');
      }).catch(err => {
        this.toastr.errorToastr(err, 'Error!');
      });
  }

}
