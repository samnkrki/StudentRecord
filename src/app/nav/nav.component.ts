import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    title = 'Student Management System'
    public user: any = new User({});
    public isLoggedin: boolean = false;
    public isAdmin: boolean = false;
    public isUser: boolean = false;

    constructor(public router: Router, public authService: AuthService, ) {
        this.authService.userDataChanged$
            .subscribe(data => {
                // call function 
                this.checkLoginData();
            });
    }

    ngOnInit() {
        this.checkLoginData();
    }

    // do necessary things in event. like check user type etc.
	/**
	 * Check if user is login
	 * 
	 */
    checkLoginData() {

        if (this.authService.isLoggedIn()) {
            this.isLoggedin = true;
            this.user = this.authService.getUser();

            if (this.user.userType == '1') {
                this.isUser = true;
            }

            if (this.user.userType == '2') {
                this.isAdmin = true;
            }

        }
        else {
            this.isLoggedin = false;
            this.isUser = false;
            this.isAdmin = false;
            this.user = new User({});

        }
    }

    login() {
        this.router.navigate(['login']);
    }

    register() {
        this.router.navigate(['register']);
    }

    logout() {
        this.authService.logout();
        this.authService.publishUserDataChange();
    }

    home() {
        this.router.navigate(['home'])
    }
}
