import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../services/user.service';
import { MatDialog } from '@angular/material';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
    public loading: boolean = false;
    userInfo: any = []
    public user: User = new User({})

    constructor(public userService: UserService,public dialog:MatDialog) {
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

    update(user,i) {
        let data = {};
        Object.assign(data, user)
        let dialogRef = this.dialog.open(UserDialogComponent, {
            width: '450px',
            data: data
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.userInfo.splice(i, 1, result);
            }
        });

    }

}
