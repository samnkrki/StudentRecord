import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    user = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    constructor(public authService: AuthService, public router: Router, public snackBar: MatSnackBar) { }

    ngOnInit() {
    }

    submit() {
        this.authService.register(this.user)
            .subscribe(user => {
                console.log(user);
                this.router.navigate(['login'])
                this.snackBar.open('Signup Success', user.email, {
                    duration: 2500
                });
            }, e => {
                console.log(e);
                this.snackBar.open('Signup Failed', JSON.parse(e._body).msg, {
                    duration: 2500
                });
            })
    }

}
