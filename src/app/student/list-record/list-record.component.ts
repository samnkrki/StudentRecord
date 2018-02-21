import { Component, OnInit } from '@angular/core';
import { StudentService, Student } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-record',
    templateUrl: './list-record.component.html',
    styleUrls: ['./list-record.component.css']
})
export class ListRecordComponent implements OnInit {

    public student: Student = new Student({})
    students: any = []
    constructor(public studentService: StudentService, public router: Router) { }

    ngOnInit() {
        this.list()
    }

    list() {
        this.studentService.listAllRecords()
            .subscribe(result => {
                this.students = result
            }, e => console.log(e))
    }

    viewAll(id: string) {
        this.router.navigate(['profile', id])
    }

}
