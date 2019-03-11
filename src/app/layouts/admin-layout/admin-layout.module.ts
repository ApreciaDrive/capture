import { EditMaintainanceCustomerComponent } from './../../edit-maintainance-customer/edit-maintainance-customer.component';
import { CreateDataComponent } from './../../create-data/create-data.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ClientsComponent } from '../../clients/clients.component';
import { MaintainanceCustomersComponent } from '../../maintainance-customers/maintainance-customers.component';
import { CreateMaintainanceCustomerComponent } from '../../create-maintainance-customer/create-maintainance-customer.component';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
} from '@angular/material';
import { EditAnnuityCustomerComponent } from '../../edit-annuity-customer/edit-annuity-customer.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    declarations: [
         DashboardComponent,
         CreateDataComponent,
         ClientsComponent,
        CreateMaintainanceCustomerComponent,
        MaintainanceCustomersComponent,
        EditAnnuityCustomerComponent,
        EditMaintainanceCustomerComponent
    ]
})

export class AdminLayoutModule { }
