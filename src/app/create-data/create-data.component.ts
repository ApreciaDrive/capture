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
    entityId: '',
    entityFullName: '',
    startDate: new Date,
    anniversaryDate: new Date,
    renewalDate: new Date,
    annuityAmount: 0,
  };
  formValid: boolean;
  constructor(
    private annuityService: AnnuityService,
    public toastr: ToastrManager,
    private route: Router,
  ) { }

  ngOnInit() {
    this.formValid = false;
  }

  onSubmit() {
    this.customer.startDate = moment(this.customer.startDate).toDate();
    this.customer.anniversaryDate = moment(this.customer.startDate).add(1, 'year').toDate();
    this.customer.renewalDate = moment(this.customer.anniversaryDate).subtract(1, 'month').toDate();
    this.annuityService.createAnnuityCustomer(this.customer).then((_) => {
      this.toastr.successToastr('Created successfully', 'Success!');
      this.route.navigate(['/clients']);
    })
      .catch(err => {
        this.toastr.errorToastr(err.message, 'Error!');
      });
  }

  onFormChanged() {

    if (
      this.customer.entityId === undefined ||
      this.customer.entityFullName === undefined ||
      this.customer.annuityAmount === undefined
    ) {
      return;
    }

    if (this.customer.entityId.length === 19) {
      if (this.customer.entityFullName.length > 0) {
        if (this.customer.annuityAmount > 0) {
          this.formValid = true;
        } else {
          this.formValid = false;
        }
      } else {
        this.formValid = false;
      }
    } else {
      this.formValid = false;
    }
  }

  clearFields() { }

}
