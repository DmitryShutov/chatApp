import { Injectable } from '@angular/core';
import { Restangular } from 'ng2-restangular';

@Injectable()
export class ApiService {

  constructor(private rest: Restangular) {
  }

  get(url, params = null) {
    return this.rest.one(url).get(params);
  }

  post(url, data = {}) {
    return this.rest.all(url).customPOST(data, undefined, undefined, {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
  }
}
