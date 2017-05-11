import { Component, OnInit } from '@angular/core';
import {Chat} from '../../classes/chat';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  currentChat: Chat;
  showContacts = false;

  constructor() { }

  ngOnInit() {

  }

  onSelectChat(currentChat: Chat) {
    this.currentChat = currentChat;
  }





}
