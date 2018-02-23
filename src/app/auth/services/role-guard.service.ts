import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class RoleGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router,public snackBar:MatSnackBar) { }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        // this will be passed from the route config
        // on the data property
        const expectedRole = route.data.expectedRole;
        const user = JSON.parse(localStorage.getItem('user'));
        
        const newUser = user.userType;
        if (
            !this.auth.isLoggedIn() ||
            newUser !== expectedRole
        ) {
            this.snackBar.open('You don\'t have necessary previlege.', 'Authentication Warn', {
                duration: 2500
            });
            this.router.navigate(['']);
            return false;
        }
        return true;
    }

}
