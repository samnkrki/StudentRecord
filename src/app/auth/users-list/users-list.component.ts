import { Component, OnInit } from '@angular/core';
import { User, AuthService } from '../services/auth.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
    userInfo: any = []
    public user: User = new User({})

    constructor(public authService: AuthService) {
    }

    ngOnInit() {
        this.getUserInfo()
    }

    getUserInfo() {
        this.authService.showUserList()
            .subscribe(result => {
                this.userInfo = result
            }, e => console.log(e))
    }

}
