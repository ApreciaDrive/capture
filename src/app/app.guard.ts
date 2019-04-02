import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private route: Router) {
    }

    canActivate(): boolean {
        console.log('local storage ', localStorage);
        if (localStorage.getItem('token')) {

            return true;
        } else {
            console.log('local storage ', localStorage);
            this.route.navigate(['/login']);
            return false;
        }
    }
}