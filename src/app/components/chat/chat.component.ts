import { Component, OnInit } from '@angular/core';
import {Chat} from '../../classes/chat';
import {ChatService} from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  currentChat: Chat;

  constructor(private ChatService: ChatService) { }

  ngOnInit() {
    this.currentChat = this.ChatService.getCurrentChat();
  }

  

}
