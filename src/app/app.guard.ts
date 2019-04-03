import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private route: Router) {
    }
    //TODO: Better check
    canActivate(): boolean {
        if (localStorage.getItem('token')) {
            return true;
        } else {
            this.route.navigate(['/login']);
            return false;
        }
    }
}