import { Routes } from '@angular/router';
import { CreateDataComponent } from '../../create-data/create-data.component';
import { ClientsComponent } from '../../clients/clients.component';
import { MaintainanceCustomersComponent } from '../../maintainance-customers/maintainance-customers.component';
import { CreateMaintainanceCustomerComponent } from '../../create-maintainance-customer/create-maintainance-customer.component';
import { EditAnnuityCustomerComponent } from '../../edit-annuity-customer/edit-annuity-customer.component';
import { EditMaintainanceCustomerComponent } from '../../edit-maintainance-customer/edit-maintainance-customer.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'clients', component: ClientsComponent },
    { path: 'create', component: CreateDataComponent },
    { path: 'maintainance', component: MaintainanceCustomersComponent },
    { path: 'create-maintainance', component: CreateMaintainanceCustomerComponent },
    { path: 'edit-annuity', component: EditAnnuityCustomerComponent },
    { path: 'edit-maintainance', component: EditMaintainanceCustomerComponent },
];
