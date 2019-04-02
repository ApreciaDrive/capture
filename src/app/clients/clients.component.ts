import { Component, OnInit } from '@angular/core';
import { AnnuityModel } from '../models/annuity.model';
import { AnnuityService } from '../service/annuity.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  headElements = ['Entity Full Name',
    'Entity ID',
    'Annuity Amount',
    'Start Date',
    'Anniversary Date',
    'Renewal Date'];
  customers: AnnuityModel[] = [];
  public selectedName: any;
  constructor(private customerService: AnnuityService, private route: Router) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    return this.customerService.getAnnuityCustomers()
    .subscribe(data => {
      this.customers = data;
      return this.customers;
    });
  }

  createAnnuityCustomer() {
    this.route.navigate(['/login']).then(() => { }, () => { });
  }

  UpdateStore(id) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        'id': id
      }
    };
      this.route.navigate(['/edit-annuity'], navigationExtras);
  }
}
