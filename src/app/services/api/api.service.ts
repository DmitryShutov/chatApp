import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from "@angular/http";
import {baseUrl} from "../baserUrl";

@Injectable()
export class ApiService {

  constructor(private http: Http) {
  }

  get(url, params = null) {
    return this.get(url, params);
  }

  post(url, body = {}) {
    console.log(baseUrl);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let postUrl = `${baseUrl}/${url}`;
    let requestBody = JSON.stringify(body);
    return this.http.post(postUrl, requestBody,  options);
  }
}
