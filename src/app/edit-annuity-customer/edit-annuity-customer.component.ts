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
        this.customerService.getCustomerByEmail(id).subscribe(users => {
          this.customer = users;
        });
      }
    });
  }

  onSubmit() {
    this.customer.StartDate = moment(this.customer.StartDate).format('LL');
    this.customer.AnniversaryDate = moment(this.customer.StartDate).add(1, 'year').format('LL');
    this.customer.RenewalDate = moment(this.customer.AnniversaryDate).subtract(1, 'month').format('LL');
    this.customerService.updateAnnuityCustomer(this.customer)
      .then((_) => {
        this.route.navigate(['/clients']);
        this.toastr.successToastr('customer updated successfully', 'Success!');
      }).catch(error => {
        this.toastr.errorToastr(error, 'Error!');
      });
  }

  deleteCustomer() {
    this.customerService.removeCustomer(this.customer)
    .then((_) => {
      this.route.navigate(['/clients']);
      this.toastr.successToastr('customer successfully removed', 'Success!');
    }).catch(err => {
      this.toastr.errorToastr(err, 'Error!');
    });
  }
}
