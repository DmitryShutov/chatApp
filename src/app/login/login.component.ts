import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import {FormControl, Validators} from "@angular/forms";
import {FormGroup} from "@angular/forms";
import { User } from "./login.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  user: FormGroup;

  ngOnInit(){
    this.user = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    console.log('press');
    console.log(value);
    this.loginService.sendLoginData(value.username, value.password)
      .subscribe(
        credentials => console.log(credentials),
        error => console.log(error));
  }


}
