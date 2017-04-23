import { Injectable } from '@angular/core';
import {User} from '../classes/user';

@Injectable()
export class UserDataService {

  constructor() { }
  user: User;

  setUser(user: User) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    console.log('user', user);
    return user;
  }

  getToken() {
    return JSON.parse(localStorage.getItem('user')).auth_key;
  }

}
