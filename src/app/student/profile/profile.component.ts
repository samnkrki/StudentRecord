import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from '../services/student.service';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    students: any = [];
    public student: Student = new Student({})
    public staticUrl: string = environment.staticUrl
    public id: string
    constructor(public studentService: StudentService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.getFull()
    }
    getFull() {
        this.route.params.subscribe(params => {
            this.id = params.id
            //console.log(this.id)
        }, e => console.log(e))
        this.studentService.showProfile(this.id)
            .subscribe(result => {
                this.students = result
            }, e => console.log(e))
    }
}
