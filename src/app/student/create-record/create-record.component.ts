import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Student, StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-create-record',
    templateUrl: './create-record.component.html',
    styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent implements OnInit {
    public loading: boolean=false;
    genders = [
        'Male',
        'Female',
    ]

    public staticUrl: string = environment.staticUrl
    public uploader: FileUploader = new FileUploader({ url: environment.baseUrl + 'file/profileImage' });

    public student: Student = new Student({})
    public students: any = [];
    uploading: boolean = false
    constructor(public studentService: StudentService, public router: Router, public snackBar: MatSnackBar) { }

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
        this.loading= true;
        this.studentService.listAllRecords()
            .subscribe(result => {
                this.students = result
                this.loading=false
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
                this.snackBar.open('Delete Success', result.firstName, {
                    duration: 2500
                });
            }, e => {
                console.log(e)
                this.snackBar.open('Error while deleting', JSON.parse(e._body).msg, {
                    duration: 2500
                });
            })
    }


    update(student: any) {
        this.student = student
    }

    updateRecord() {
        this.studentService.updateRecord(this.student)
            .subscribe(result => {
                this.resetForm()
                this.getStudents()
                this.snackBar.open('Update Success', result.firstName, {
                    duration: 2500
                });
            }, e => {
                console.log(e)
                this.snackBar.open('Update Failed', JSON.parse(e._body.msg), {
                    duration: 2500
                });
            })

    }

    createRecord() {
        this.studentService.createNewRecord(this.student)
            .subscribe(result => {
                this.students.push(result)
                this.resetForm()
                this.snackBar.open('Record added Successfully', result.firstName, {
                    duration: 2500
                });
            }, e => {
                console.log(e)
                this.snackBar.open('Failure Adding Record', JSON.parse(e._body.msg), {
                    duration: 2500
                });
            })
    }

    viewAll(id: string) {

        this.router.navigate(['profile', id])
    }


}
