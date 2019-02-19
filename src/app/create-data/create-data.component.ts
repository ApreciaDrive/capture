import { ClientModel } from './../models/client.model';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent implements OnInit {
  client: ClientModel = {
    customer: '',
    birthday: '',
    contactPeron: '',
    accManager: '',
    product: '',
    item: '',
    streetAddress: '',
    surburb: '',
    town: '',
    city: '',
    province: '',
    country: '',
    postalCode: '',
  };
  constructor(
    private clientService: ClientService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.client);
      this.clientService.createClient(this.client);
  }
}
