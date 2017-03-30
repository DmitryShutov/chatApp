import { Injectable } from '@angular/core';
import {Response} from "@angular/http";
import {Observable} from "../../../node_modules/rxjs/Observable";
import {ApiService} from "./api/api.service";

@Injectable()
export class LoginService {

  constructor(private http: ApiService) { }

  sendLoginData(user: any) {
    const url = '/user/login';
    return this.http.post(url, user)
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
