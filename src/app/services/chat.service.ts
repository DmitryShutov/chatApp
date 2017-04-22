import { Injectable } from '@angular/core';
import {ApiService} from './api/api.service';
import {Response} from "@angular/http";
import {Chat} from '../classes/chat';

@Injectable()
export class ChatService {

  chatUrl = '/url';
  currentChat: Chat;

  constructor(private api: ApiService) { }

  setCurrentChat(currentChat) {
    this.currentChat = currentChat;
  }

  createChat(userIds: number[], name: string) {
    const body = {userIds, name};
    return this.api.post(this.chatUrl, body)
      .map((data: Response) => data.json());
  }

  getChat() {
    return this.api.get(this.chatUrl)
      .map((data: Response) => data.json());
  }

  getCurrentChat(): Chat {
    return this.currentChat;
  }
}
