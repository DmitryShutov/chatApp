import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from "@angular/http";
import {Observable} from "../../../node_modules/rxjs/Observable";
import { baseUrl } from './baserUrl';

@Injectable()
export class LoginService {

  private loginUrl = `${baseUrl}/user/login`;

  constructor(private http: Http) { }

  login(login, password) {
    let params = new URLSearchParams();
    params.set('username', login);
    params.set('password', password);
    return this.http.get(this.loginUrl, {params})
                    .map(this.extractData)
                    .catch(this.handleError)
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
