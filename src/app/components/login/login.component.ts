import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {UserLogin} from "../../interfaces/login.interface";
import {User} from "../../classes/user";
import {Router} from '@angular/router';
import {UserDataService} from '../../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private userData: UserDataService) { }
  userLogin: FormGroup;
  user: User;

  ngOnInit(){
    this.userLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onSubmit({value, valid}: {value: UserLogin, valid: boolean}) {
    const credentials = {
      username: value.username,
      password: value.password,
    };
    this.userService.sendLoginData(credentials)
      .subscribe(
        (userData: User) => this.handleResponse(userData),
        error => console.log(error));
  }

  handleResponse(userData: User) {
    this.userData.setUser(userData);
    this.router.navigate(['main-screen']);
  }




}
