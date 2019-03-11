import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { AnnuityModel } from '../models/annuity.model';
import { AnnuityService } from '../service/annuity.service';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent implements OnInit {
  customer: AnnuityModel = {
    EntityId: '',
    EntityFullName: '',
    StartDate: '',
    AnniversaryDate: '',
    RenewalDate: '',
    AnnuityAmount: 0,
  };
  constructor(
    private annuityService: AnnuityService,
    public toastr: ToastrManager,
    private route: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.customer.StartDate = moment(this.customer.StartDate).format('LL');
    this.customer.AnniversaryDate = moment(this.customer.StartDate).add(1, 'year').format('LL');
    this.customer.RenewalDate = moment(this.customer.AnniversaryDate).subtract(1, 'month').format('LL');
    this.annuityService.createAnnuityCustomer(this.customer).then((_) => {
        this.toastr.successToastr('Created successfully', 'Success!');
        this.route.navigate(['/clients']);
      });
  }

  clearFields() {

  }
}
