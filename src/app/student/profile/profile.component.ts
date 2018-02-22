import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from '../services/student.service';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    public loading: boolean=false;
    students: any = [];
    public student: Student = new Student({})
    public staticUrl: string = environment.staticUrl
    public id: string
    constructor(public studentService: StudentService, private route: ActivatedRoute,public snackBar:MatSnackBar) { }

    ngOnInit() {
        this.getFull()
    }
    getFull() {
        this.loading = true
        this.route.params.subscribe(params => {
            this.id = params.id
        }, e => console.log(e))
        this.studentService.showProfile(this.id)
            .subscribe(result => {
                this.students = result
                this.loading = false
            }, e => {
                console.log(e)
                this.snackBar.open('Error fetching data', JSON.parse(e._body.msg), {
                    duration: 2500
                });
            })
    }
}
