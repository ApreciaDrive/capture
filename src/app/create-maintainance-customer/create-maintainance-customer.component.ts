import { Component, OnInit } from '@angular/core';
import { MaintainanceModel } from '../models/maintainance.model';
import { MaintainanceService } from '../service/maintainance.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-maintainance-customer',
  templateUrl: './create-maintainance-customer.component.html',
  styleUrls: ['./create-maintainance-customer.component.css']
})
export class CreateMaintainanceCustomerComponent implements OnInit {

  customer: MaintainanceModel = {
    entityId: '',
    entityFullName: '',
    product: '',
    productCategory: '',
    item: '',
    quantity: 0,
    unitPrice: 0,
    value: 0,
    yearlyMaintenance: 0,
  };

  constructor(
    private customerService: MaintainanceService,
    public toastr: ToastrManager,
    private route: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.customerService.createMaintainanceCustomer(this.customer)
    .then((_) => {
      this.route.navigate(['/create-maintainance']).then(() => { }, () => { });
      this.toastr.successToastr('Created successfully', 'Success!');
    })
    .catch(err => {
      this.toastr.errorToastr(err.message, 'Error!');
    });
  }
}
