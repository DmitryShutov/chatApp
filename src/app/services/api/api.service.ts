import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {baseUrl} from "../baserUrl";
import {UserDataService} from '../user-data.service';

@Injectable()
export class ApiService {

  token: string;
  headers = new Headers();

  constructor(private http: Http, private UserData: UserDataService) {
    this.token = this.UserData.getToken();
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.headers.append('X-Token', `${this.token}`);
  }

  get(url, data = null) {
    const getUrl = `${baseUrl}/${url}`;
    let params = new URLSearchParams();
    for(let key in data) {
      params.set(key, data[key]);
    }
    let options = new RequestOptions({
      headers: this.headers,
    });
    return this.http.get(getUrl, options);
  }

  post(url, body = {}) {
    let postUrl = `${baseUrl}/${url}`;
    return this.http.post(postUrl, body);
  }
}
