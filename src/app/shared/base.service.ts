import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class BaseService {

    public url: string = environment.baseUrl;

    constructor(
        public http: Http
    ) { }

    handleError(error: any) {
        return Observable.throw(error);
    }

    extractData(res: Response) {
        const body = res.json();
        return body || {};
    }

    getOptions() {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + this.getToken());
        const options = new RequestOptions({ headers: headers });
        return options;
    }

    getToken() {
        return localStorage.getItem('token');
    }
} 