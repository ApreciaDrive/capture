import { DocumentReference } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { AnnuityService } from '../service/annuity.service';
import { AnnuityModel } from '../models/annuity.model';
import { isNullOrUndefined } from 'util';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-annuity-customer',
  templateUrl: './edit-annuity-customer.component.html',
  styleUrls: ['./edit-annuity-customer.component.css']
})
export class EditAnnuityCustomerComponent implements OnInit {
  customer = {} as AnnuityModel;
  formValid: boolean;

  constructor(
    private customerService: AnnuityService,
    private route: Router,
    private activeroute: ActivatedRoute,
    private toastr: ToastrManager, ) { }

  ngOnInit() {
    this.activeroute.queryParams.subscribe(params => {
      const id = params['id'];
      if (!isNullOrUndefined(id)) {
        this.customerService.getCustomerById(id)
          .then(user => {
            this.customer = user;
          }).catch(error => {
            this.route.navigate(['/clients']);
            this.toastr.errorToastr(error.statusText, 'Error!');
          });
      }
    });
  }

  onSubmit() {
    this.customerService.updateAnnuityCustomer(this.customer)
      .then((_) => {
        this.route.navigate(['/clients']);
        this.toastr.successToastr('customer updated successfully', 'Success!');
      })
      .catch(error => {
        this.toastr.errorToastr(error, 'Error!');
      });
  }

  deleteCustomer() {
    this.customerService.removeCustomer(this.customer.entityId)
      .then((_) => {
        this.route.navigate(['/clients']);
        this.toastr.successToastr('customer successfully removed', 'Success!');
      })
      .catch(error => {
        this.toastr.errorToastr(error.statusText, 'Error!');
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
        if (this.customer.annuityAmount >= 0) {
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
}
