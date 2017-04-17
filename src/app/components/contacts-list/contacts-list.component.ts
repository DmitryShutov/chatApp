import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { PaginatorDirective } from '../../directives/paginator.directive';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  private userList: Array<object> = [];
  page: number = 1;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.getUserList();
  }

  getNextUsers($event) {
    console.log($event);
    this.page++;
    this.getUserList();
  }

  getUserList() {
    this.userService.getUserList(this.page)
      .subscribe(
        (users) =>  { console.log(users); this.userList.push(...users); console.log(this.userList); },
        error => console.error(error)
      );
  }
}
