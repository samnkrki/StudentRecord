import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Student, StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'app-create-record',
    templateUrl: './create-record.component.html',
    styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent implements OnInit {
    genders = [
        'Male',
        'Female',
    ]

    public staticUrl: string = environment.staticUrl
    public uploader: FileUploader = new FileUploader({ url: environment.baseUrl + 'file/profileImage' });

    public student: Student = new Student({})
    public students: any = [];
    uploading: boolean = false
    constructor(public studentService: StudentService, public router: Router) { }

    ngOnInit() {
        this.getStudents()
        this.uploader.onErrorItem = (item: any, response: string, status: number, headers): any => {
            // this.notifyService.showFileUploadError(response);
        }

        this.uploader.onProgressItem = (file) => {
            this.uploading = true;
        };

        this.uploader.onAfterAddingFile = (file) => {
            if (this.uploader.queue.length > 1) {
                this.uploader.queue.splice(0, 1);
            }
            file.withCredentials = false;
        };

        this.uploader.onSuccessItem = (item: any, response: any, status: any, headers: any) => {
            let res = JSON.parse(response);
            this.student.image = res.filename;
            console.log("ImageUpload:uploaded:", item, status, response);

        };
    }

    getStudents() {
        this.studentService.listAllRecords()
            .subscribe(result => {
                this.students = result
            }, e => console.log(e))
    }

    submit() {
        if (this.student._id) {
            this.updateRecord()
        }
        else {
            this.createRecord()
        }
    }

    resetForm() {
        this.student = new Student({})
    }

    deleteRecord(id: string, i) {
        this.studentService.removeRecord(id)
            .subscribe(result => {
                this.students.splice(i, 1)
            }, e => console.log(e))
    }


    update(student: any) {
        this.student = student
    }

    updateRecord() {
        this.studentService.updateRecord(this.student)
            .subscribe(result => {
                this.resetForm()
                this.getStudents()
            }, e => console.log(e))

    }

    createRecord() {
        this.studentService.createNewRecord(this.student)
            .subscribe(result => {
                this.students.push(result)
                this.resetForm()
            }, e => console.log(e))
    }

    viewAll(id: string) {

        this.router.navigate(['profile', id])
    }


}
