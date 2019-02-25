import { AdminLayoutComponent } from './admin-layout.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CreateDataComponent } from '../../create-data/create-data.component';
import { ClientsComponent } from '../../clients/clients.component';
import { MaintainanceCustomersComponent } from '../../maintainance-customers/maintainance-customers.component';
import { CreateMaintainanceCustomerComponent } from '../../create-maintainance-customer/create-maintainance-customer.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'clients', component: ClientsComponent },
    { path: 'create', component: CreateDataComponent },
    { path: 'maintainance', component: MaintainanceCustomersComponent },
    { path: 'create-maintainance', component: CreateMaintainanceCustomerComponent },
];
