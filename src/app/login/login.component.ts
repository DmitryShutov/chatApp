import { Component } from '@angular/core';
import {LoginService} from "../services/login.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent{

  constructor(private loginService: LoginService) { }

  username = new FormControl();
  password = new FormControl();

  tryToLogin() {
    console.log(this.username);
    if (this.username.value && this.username.value.length > 0 && this.password.value && this.password.value.length > 0) {
      this.loginService.sendLoginData(this.username.value, this.password.value)
        .subscribe(
          credentials => console.log(credentials),
          error => console.log(error));
    }
  }

}
