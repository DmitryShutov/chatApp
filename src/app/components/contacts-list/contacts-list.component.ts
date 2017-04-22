import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { PaginatorDirective } from '../../directives/paginator.directive';
import {Chat} from '../../classes/chat';
import {ChatService} from '../../services/chat.service';
import {User} from '../../classes/user';
import {current} from 'codelyzer/util/syntaxKind';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  private userList: Array<object> = [];
  private page: number = 1;
  private end: boolean = false;
  private currentChat: Chat;

  constructor(private userService: UserService, private ChatService: ChatService) {

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

  onUserSelect(user: User) {
    this.currentChat = new Chat([user.id], user.displayname);
    this.ChatService.setCurrentChat(this.currentChat);
  }
}
