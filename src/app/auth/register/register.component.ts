import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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

    constructor(public authService: AuthService, public router: Router) { }

    ngOnInit() {
    }

    submit() {
        this.authService.register(this.user)
            .subscribe(user => {
                console.log(user);
                this.router.navigate(['login'])
            }, e => {
                console.log(e);
            })
    }

}
