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
  @Output() noChats = new EventEmitter<boolean>();

  constructor(private ChatService: ChatService) { }

  ngOnInit() {
    this.getChatsList();
  }

  getChatsList() {
    this.ChatService.getChatList()
      .subscribe(
        list => this.handleChatList(list),
        error => console.error(error),
      )
  }
  
  handleChatList(list) {
    this.chatList = list;
    if (this.chatList.length > 0) {
      this.onChatSelect(this.chatList[0]);
    } else {
      this.noChats.emit(true);
    }
  }

  onChatSelect(chat: Chat) {
    this.currentChat = chat;
    this.ChatService.setCurrentChat(this.currentChat);
    this.onSelectChat.emit(this.currentChat)
  }

}
