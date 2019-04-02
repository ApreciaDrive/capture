import { NgModule } from '@angular/core';
import { UserRegistrationComponent } from './user-registration.component';
import { UserRegistrationRoutingModule } from './user-registration-routing.module';

@NgModule({
    imports: [
        UserRegistrationRoutingModule],
    declarations: [UserRegistrationComponent]
})
export class UserRegistrationModule { }
