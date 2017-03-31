import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from "@angular/http";
import {baseUrl} from "../baserUrl";

@Injectable()
export class ApiService {

  constructor(private http: Http) {
  }

  get(url, params = null) {
    return this.get(url).get(params);
  }

  post(url, body = {}) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let postUrl = `${baseUrl}/${url}`;
    let requestBody = JSON.stringify(body).replace(/\"/g, "");
    console.log(requestBody);
    return this.http.post(url, requestBody,  options);
  }
}
