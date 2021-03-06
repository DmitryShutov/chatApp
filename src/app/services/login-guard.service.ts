import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {UserDataService} from './user-data.service';

@Injectable()
export class LoginGuardService implements CanActivate {

  constructor(private UserDataService: UserDataService) { }

  canActivate() {
    return this.UserDataService.loggedIn();
  }
}
