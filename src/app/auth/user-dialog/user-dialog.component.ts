import { Component, OnInit, Inject } from '@angular/core';
import { User, UserService } from '../services/user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-user-dialog',
    templateUrl: './user-dialog.component.html',
    styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

    public saving: boolean = false;
    public user: User = new User({});
    public dialogTitle = "Update User";

    constructor(
        public userService: UserService,
        public dialogRef: MatDialogRef<UserDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit() {
        if (this.data._id) {
            this.user = this.data;
            this.dialogTitle = 'Update User Type'
        }
    }

    save() {
        this.saving = true;
        if (this.user._id) {
            this.update();
        }
    }

    update() {
        this.userService.update(this.user)
            .subscribe(user => {
                this.dialogRef.close(user);
                this.saving = false;
            }, e => {
                this.saving = false;
                console.log(e);
            })
    }
}
