import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {baseUrl} from "../baserUrl";
import {UserDataService} from '../user-data.service';

@Injectable()
export class ApiService {

  token: string;

  constructor(private http: Http, private UserData: UserDataService) {
    this.token = this.UserData.getToken();
  }

  get(url, data = null) {
    const getUrl = `${baseUrl}/${url}?auth_key=${this.token}`;
    let params = new URLSearchParams();
    for(let key in data) {
      params.set(key, data[key]);
    }
    params.set('auth_key', this.token);
    let options = new RequestOptions({
      search: params
    });
    return this.http.get(getUrl, params);
  }

  post(url, body = {}) {
    let postUrl = `${baseUrl}/${url}`;
    return this.http.post(postUrl, body);
  }
}
