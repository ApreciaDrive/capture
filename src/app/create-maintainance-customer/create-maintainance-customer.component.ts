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
    EntityId: '',
    EntityFullName: '',
    RenewalDate: '',
    StartDate: '',
    Product: '',
    ProductCategory: '',
    Item: '',
    Qty: 0,
    UnitPrice: 0,
    Value: 0,
    YearlyMaintainance: '',
  };

  constructor(
    private customerService: MaintainanceService,
    public toastr: ToastrManager,
    private route: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.customerService.createMaintainanceCustomer(this.customer).then((_) => {
      this.toastr.successToastr('Created successfully', 'Success!');
    });
  }

  clearFields() {}
}
