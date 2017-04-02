import { Injectable } from '@angular/core';
import {User} from '../classes/user';

@Injectable()
export class UserDataService {

  constructor() { }
  user: User;

  setUser(user: User) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify({ token: this.user.auth_key, name: this.user.cn }));
  }

  getUser():User {
    return this.user;
  }

  getToken() {
    return JSON.parse(localStorage.getItem('user')).token;
  }

}
