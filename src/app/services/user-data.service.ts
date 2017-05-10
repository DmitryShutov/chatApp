import { Injectable } from '@angular/core';
import {User} from '../classes/user';

@Injectable()
export class UserDataService {
  user: User;

  constructor() {
  }

  setUser(user) {
    this.user = user.data;
    localStorage.setItem('user', JSON.stringify(this.user));

  }

  getUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    console.log('user', user);
    return user;
  }

  getToken() {
    console.log(JSON.parse(localStorage.getItem('user')));
    return JSON.parse(localStorage.getItem('user')).auth_key;
  }

  loggedIn() {
    return !!this.getToken();
  }
}
