import { ClientModel } from './../models/client.model';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent implements OnInit {
  client: ClientModel = {
    customer: '',
    birthday: '',
    contactPerson: '',
    accManager: '',
    product: '',
    item: '',
    streetAddress: '',
    productCategory: '',
    licenceKey: '',
    surburb: '',
    town: '',
    city: '',
    province: '',
    country: '',
    postalCode: '',
  };
  constructor(
    private clientService: ClientService,
    public toastr: ToastrManager,
    private route: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.client.birthday = moment(this.client.birthday).format('LL');
      this.clientService.createClient(this.client).then((_) => {
        this.toastr.successToastr('Created successfully', 'Success!');
      });
  }
}
