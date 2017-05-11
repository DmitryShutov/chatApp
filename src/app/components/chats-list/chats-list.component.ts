import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../classes/chat';

@Component({
  selector: 'app-chats-list',
  templateUrl: './chats-list.component.html',
  styleUrls: ['./chats-list.component.scss']
})
export class ChatsListComponent implements OnInit {
  chatList: Array<Chat>;
  currentChat: Chat;

  @Output() onSelectChat = new EventEmitter<Chat>();

  constructor(private ChatService: ChatService) { }

  ngOnInit() {
    this.getChatsList();
  }

  getChatsList() {
    this.ChatService.getChatList()
      .subscribe(
        list => this.chatList = list,
        error => console.error(error),
      )
  }

  onChatSelect(chat: Chat) {
    this.currentChat = chat;
    this.ChatService.setCurrentChat(this.currentChat);
    this.onSelectChat.emit(this.currentChat)
  }

}
