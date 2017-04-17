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
  private page: number = 1;
  private end: boolean = false;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.getUserList();
  }

  getNextUsers($event) {
    if (this.end) {
      return;
    }
    this.page++;
    this.getUserList();
  }

  getUserList() {
    this.userService.getUserList(this.page)
      .subscribe(
        (users) =>  {
          if(users && users.length === 0) {
            this.end = true;
            return;
          }
          this.userList.push(...users);
        },
        error => console.error(error)
      );
  }
}
