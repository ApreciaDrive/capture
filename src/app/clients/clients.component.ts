import { Component, OnInit } from '@angular/core';
import { AnnuityModel } from '../models/annuity.model';
import { AnnuityService } from '../service/annuity.service';
import { Router } from '@angular/router';

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
  constructor(private customerService: AnnuityService, private route: Router) { }

  ngOnInit() {
    this.getClients();
  }
  getClients() {
    return this.customerService.getAnnuityCustomers().subscribe(users => {
      this.customers = users;
      return this.customers;
    });
  }

  createAnnuityCustomer() {
    this.route.navigate(['/create']).then(() => { }, () => { });
  }
}
