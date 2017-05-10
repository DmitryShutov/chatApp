import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-chats-list',
  templateUrl: './chats-list.component.html',
  styleUrls: ['./chats-list.component.scss']
})
export class ChatsListComponent implements OnInit {

  constructor(private ChatService: ChatService) { }

  ngOnInit() {
    this.getChatsList();
  }

  getChatsList() {
    this.ChatService.getChatList()
      .subscribe(
        list => console.log(list),
        error => console.error(error),
      )
  }

}
