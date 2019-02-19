import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { ClientModel } from '../models/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  headElements = ['Customer',
    'Birthday',
    'Contact Person',
    'Acc Manager',
    'Product',
    'Item'];
  clients: ClientModel[] = [];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }
  getClients() {
    return this.clientService.getClients().subscribe(users => {
      this.clients = users;
      return this.clients;
    });
  }
}
