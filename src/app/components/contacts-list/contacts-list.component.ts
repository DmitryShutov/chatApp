import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.userService.getUserList()
      .subscribe(
        userList => console.log(userList),
        error => console.error(error)
      );
  }

}
