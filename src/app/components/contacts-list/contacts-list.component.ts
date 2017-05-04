import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {UserService} from '../../services/user.service';
import { PaginatorDirective } from '../../directives/paginator.directive';
import {Chat} from '../../classes/chat';
import {ChatService} from '../../services/chat.service';
import {User} from '../../classes/user';
import {UserDataService} from '../../services/user-data.service';

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
  private currentUserId: number;

  @Output() onSelectUser = new EventEmitter<Chat>();

  constructor(private userService: UserService,
              private ChatService: ChatService,
              private UserDataService: UserDataService) {}

  ngOnInit() {
    this.getUserList();
    console.log(this.UserDataService.getUser());
    this.currentUserId = this.UserDataService.getUser().id;
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
          if(users && users.data && users.length === 0) {
            this.end = true;
            return;
          }
          this.userList.push(...users.data);
        },
        error => console.error(error)
      );
  }

  onUserSelect(user: User) {
    console.log(user);
    this.currentChat = new Chat([user.id], user.displayname);
    this.ChatService.setCurrentChat(this.currentChat);
    this.onSelectUser.emit(this.currentChat);
  }
}
