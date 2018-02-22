import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../services/user.service';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
    public loading: boolean = false;
    userInfo: any = []
    public user: User = new User({})

    constructor(public userService: UserService) {
    }

    ngOnInit() {
        this.getUserInfo()
    }

    getUserInfo() {
        this.loading = true;
        this.userService.showUserList()
            .subscribe(result => {
                this.userInfo = result
                this.loading = false
            }, e => {
                console.log(e)
            })
    }

}
