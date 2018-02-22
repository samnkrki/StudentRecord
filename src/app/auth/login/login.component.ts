import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user = {
        email: '',
        password: ''
    }

    constructor(public authService: AuthService, public router: Router, public snackBar: MatSnackBar) { }

    ngOnInit() {
    }

    submit() {
        this.authService.login(this.user)
            .subscribe(data => {
                this.authService.setUser(data);
                this.authService.publishUserDataChange();
                if (this.authService.redirectUrl) {
                    this.router.navigate([this.authService.redirectUrl]);
                }
                else {
                    this.router.navigate(['home'])
                }
                this.snackBar.open('Login Success', data.email, {
                    duration: 2500
                });
            }, e => {
                console.log(e);
                this.snackBar.open('Login Failed', JSON.parse(e._body).msg, {
                    duration: 2500
                });
            });

    }

}
