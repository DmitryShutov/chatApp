import {Injectable, OnInit} from '@angular/core';
import {ApiService} from './api/api.service';
import {Response} from "@angular/http";
import {Chat} from '../classes/chat';

@Injectable()
export class ChatService {

  chatUrl = 'chat';
  currentChat: Chat;


  constructor(private api: ApiService) { }

  getChatList() {
    return this.api.get(this.chatUrl)
      .map((res: Response) => res.json().data);
  }

  getCurrentChat(): Chat {
    return this.currentChat;
  }

  dropCurrentChat() {
    this.currentChat = null;
  }

  createChat() {
    const body = this.currentChat;
    return this.api.post(this.chatUrl, body)
      .map((res: Response) => res.json());
  }

  sendMessage(message: string) {
    const url = `${this.chatUrl}/message?expand=chat`;
    const body = {text: message, chat_id: this.currentChat.id};
    return this.api.post(url, body)
      .map((res: Response) => res.json());
  }

  setCurrentChat(currentChat) {
    this.currentChat = currentChat;
  }

  deleteChat() {
    const deleteUrl = `${this.chatUrl}/${this.currentChat.id}`;
    return this.api.delete(deleteUrl)
      .map((res: Response) => res.json().data);
  }
}
