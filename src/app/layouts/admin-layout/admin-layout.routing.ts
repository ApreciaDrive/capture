import { AdminLayoutComponent } from './admin-layout.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CreateDataComponent } from '../../create-data/create-data.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'create', component: CreateDataComponent },
];
