import { Injectable } from '@angular/core';
import {Response} from "@angular/http";
import {Observable} from "../../../node_modules/rxjs/Observable";
import {ApiService} from "./api/api.service";
import {IUser} from "../interfaces/userinterface";
import {User} from '../classes/user';

@Injectable()
export class UserService {
  user: User;
  userUrl: string = 'user';

  constructor(private api: ApiService) { }

  sendLoginData(credentials: object): Observable<IUser> {
    const loginUrl = `${this.userUrl}/login`;
    return this.api.post(loginUrl, credentials)
      .map((data: Response) => data.json());
  }

  getUserList(page: number = 0, perPage: number = 50) {
    return this.api.get(`${this.userUrl}?page=${page}&per-page=${perPage}`)
      .map((response: Response) => response.json());
  }
}
