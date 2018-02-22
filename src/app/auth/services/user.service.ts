import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BaseService } from '../../shared/base.service';

export class User {
    _id: string;
    name: string;
    email: string;
    userType: string;

    constructor(options: any) {
        this._id = options._id || '';
        this.name = options.name || '';
        this.email = options.email || '';
        this.userType = options.userType || '';
    }

};

@Injectable()
export class UserService {
private url:string
    constructor(public baseService:BaseService,public http:Http) {this.url = this.baseService.url + 'user/' }

    showUserList(): Observable<any> {
        return this.http.get(this.url, this.baseService.getOptions())
            .map(this.baseService.extractData)
            .catch(this.baseService.handleError)
    }  

}
