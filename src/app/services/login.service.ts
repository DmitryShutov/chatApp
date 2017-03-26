import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams, Headers} from "@angular/http";
import {Observable} from "../../../node_modules/rxjs/Observable";
import { baseUrl } from './baserUrl';

@Injectable()
export class LoginService {

  private loginUrl = `${baseUrl}/user/login`;

  constructor(private http: Http) { }

  sendLoginData(user: any) {
    const body = JSON.stringify(user);
    console.log(user);
    return this.http.post(this.loginUrl, body)
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
