import { Component, OnInit } from '@angular/core';
import { AnnuityModel } from '../models/annuity.model';
import { AnnuityService } from '../service/annuity.service';
import { Router, NavigationExtras } from '@angular/router';
import { MaintainanceService } from '../service/maintainance.service';
import { MaintainanceModel } from '../models/maintainance.model';

@Component({
  selector: 'app-maintainance-customers',
  templateUrl: './maintainance-customers.component.html',
  styleUrls: ['./maintainance-customers.component.scss']
})
export class MaintainanceCustomersComponent implements OnInit {
  headElements = [
    'Entity Full Name',
    'Entity ID',
    'Product',
    'Product Category',
    'Item',
    'Qty',
    'Unit Price',
    'Total Amount',
    'Start Date',
    'Renewal Date'
  ];
  customers: MaintainanceModel[] = [];

  constructor(private customerService: MaintainanceService, private route: Router) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    return this.customerService.getMaintananceCustomers()
    .then(users => {
      this.customers = users;
      return this.customers;
    });
  }

  createMaintainanceCustomer() {
    this.route.navigate(['/create-maintainance']).then(() => { }, () => { });
  }

  UpdateStore(data) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        'id': data
      }
    };
    this.route.navigate(['/edit-maintainance'], navigationExtras);
  }
}
