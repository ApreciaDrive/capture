import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './app.guard';

const routes: Routes = [{
    path: '',
    redirectTo: 'clients',
    pathMatch: 'full',
}, {
    path: '',
    component: AdminLayoutComponent,
    children: [{path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule', canActivate: [AuthGuard]
    }]
    }, { path: 'login', component: LoginComponent, children: [{ path: 'login', loadChildren: './login/login.module#LoginModule'}]}
    , { path: 'registration', component: UserRegistrationComponent,
        children: [{ path: 'login', loadChildren: './user-registration/user-registration.module#UserRegistrationModule'}]}];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
