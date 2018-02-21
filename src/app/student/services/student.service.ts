import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from '../../shared/base.service';
import { Observable } from 'rxjs/Observable';

export class Student {
    _id: string
    firstName: string
    middleName: string
    lastName: string
    email: string
    phone: string
    image: string
    gender: string
    roll: string
    dob: string
    createdBy: string
    guardianName: string
    guardianNum: string

    constructor(options: any) {
        this._id = options._id || ''
        this.firstName = options.firstName || ''
        this.middleName = options.middleName || ''
        this.lastName = options.lastName || ''
        this.email = options.email || ''
        this.phone = options.phone || ''
        this.dob = options.dob || ''
        this.roll = options.roll || ''
        this.gender = options.gender || ''
        this.image = options.image || ''
        this.createdBy = options.createdBy || ''
        this.guardianName = options.guardianName || ''
        this.guardianNum = options.guardianNum || ''
    }
}

@Injectable()
export class StudentService {
    public url: string

    constructor(public http: Http, public baseService: BaseService) { this.url = this.baseService.url + 'student/' }

    listAllRecords(): Observable<any> {
        return this.http.get(this.url, this.baseService.getOptions())
            .map(this.baseService.extractData)
            .catch(this.baseService.handleError)
    }

    removeRecord(id: string): Observable<any> {
        return this.http.delete(this.url + id, this.baseService.getOptions())
            .map(this.baseService.extractData)
            .catch(this.baseService.handleError)
    }

    updateRecord(student: any): Observable<any> {
        let body = JSON.stringify(student)
        return this.http.put(this.url + student._id, body, this.baseService.getOptions())
            .map(this.baseService.extractData)
            .catch(this.baseService.handleError)
    }

    createNewRecord(student: any): Observable<any> {
        let body = JSON.stringify(student)
        return this.http.post(this.url, body, this.baseService.getOptions())
            .map(this.baseService.extractData)
            .catch(this.baseService.handleError)
    }

    showProfile(id: string): Observable<any> {
        return this.http.get(this.url + id, this.baseService.getOptions())
            .map(this.baseService.extractData)
            .catch(this.baseService.handleError)
    }
}
