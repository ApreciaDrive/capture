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
        });
      }
    });
  }

  onSubmit() {
    this.customer.startDate = moment(this.customer.startDate).toDate();
    this.customer.anniversaryDate = moment(this.customer.startDate).add(1, 'year').toDate();
    this.customer.renewalDate = moment(this.customer.anniversaryDate).subtract(1, 'month').toDate();
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
    }).catch(err => {
      this.toastr.errorToastr(err, 'Error!');
    });
  }
}
