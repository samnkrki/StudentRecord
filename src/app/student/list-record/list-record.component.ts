import { Component, OnInit } from '@angular/core';
import { StudentService, Student } from '../services/student.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-list-record',
    templateUrl: './list-record.component.html',
    styleUrls: ['./list-record.component.css']
})
export class ListRecordComponent implements OnInit {

    public loading: boolean = false;
    public student: Student = new Student({})
    students: any = []
    public staticUrl: string = environment.staticUrl
    constructor(public studentService: StudentService, public router: Router,public snackBar:MatSnackBar) { }

    ngOnInit() {
        this.getStudents()
    }

    getStudents() {
        this.loading = true
        this.studentService.listAllRecords()
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

    viewAll(id: string) {
        this.router.navigate(['profile', id])
    }

}
