import { Component } from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent{

  constructor(private loginService: LoginService) { }

  tryToLogin(login: string, password: string) {
    if (login && password) {
      this.loginService.sendLoginData(login, password)
        .subscribe(
          credentials => console.log(credentials),
          error => console.log(error));
    }
  }

}
