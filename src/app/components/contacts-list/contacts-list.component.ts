import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { PaginatorDirective } from '../../directives/paginator.directive';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  userList: string[];
  page: number = 0;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.getUserList();
  }

  getNextUsers($event) {
    this.page++;
    this.getUserList();
  }

  getUserList() {
    this.userService.getUserList(this.page)
      .subscribe(
        (userList) =>  { this.userList = userList; },
        error => console.error(error)
      );
  }
}
