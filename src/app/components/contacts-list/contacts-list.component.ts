import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {UserService} from '../../services/user.service';
import { PaginatorDirective } from '../../directives/paginator.directive';
import {Chat} from '../../classes/chat';
import {ChatService} from '../../services/chat.service';
import {User} from '../../classes/user';
import {UserDataService} from '../../services/user-data.service';
import { UIService } from '../../services/ui.service';

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

  @Output() onSelectChat = new EventEmitter<Chat>();

  constructor(private UserService: UserService,
              private ChatService: ChatService,
              private UserDataService: UserDataService,
              private UIService: UIService) {}

  ngOnInit() {
    this.getUserList();
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
    this.UserService.getUserList(this.page)
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
    this.currentChat = new Chat([this.currentUserId, user.id], user.displayname);
    this.ChatService.setCurrentChat(this.currentChat);
    this.onSelectChat.emit(this.currentChat);
  }
  
  hideContacts() {
    this.UIService.onShowContract(false);
  }
}
