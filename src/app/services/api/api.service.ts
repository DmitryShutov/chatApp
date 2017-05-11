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
    const params = new URLSearchParams();
    for(let key in data) {
      params.set(key, data[key]);
    }
    const options = new RequestOptions({
      headers: this.headers,
    });
    return this.http.get(getUrl, options);
  }

  post(url, body = {}) {
    const postUrl = `${baseUrl}/${url}`;
    const options = new RequestOptions({
      headers: this.headers,
    });
    return this.http.post(postUrl, body, options);
  }

  delete(url) {
    const deleteUrl = `${baseUrl}/${url}`;
    const options = new RequestOptions({
      headers: this.headers,
    });
    return this.http.delete(deleteUrl, options);
  }
}
