import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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

    constructor(public authService: AuthService, public router: Router) { }

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
            }, e => {
                console.log(e);
            });

    }

}
