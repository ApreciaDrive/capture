import { AdminLayoutComponent } from './admin-layout.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CreateDataComponent } from '../../create-data/create-data.component';
import { ClientsComponent } from '../../clients/clients.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'create', component: CreateDataComponent },
    { path: 'clients', component: ClientsComponent },
];
