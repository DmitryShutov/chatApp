import { Injectable } from '@angular/core';
import {Response, Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "../../../node_modules/rxjs/Observable";
import {ApiService} from "./api/api.service";

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  sendLoginData(login: string, password: string) {
    const body = `username=${login}&password=${password}`;
    let url = 'http://172.30.3.179:8085/user/login';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, body,  options)
      .map((data: Response) => data.json());
  }

  extractData(response: Response) {
    let body = response.json();
    return body.data || {};
  }

  private handleError (error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
