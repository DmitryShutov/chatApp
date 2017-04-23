import { Component, OnInit } from '@angular/core';
import {Chat} from '../../classes/chat';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  currentChat: Chat;

  constructor() { }

  ngOnInit() {

  }

  onSelectuser(currentChat: Chat) {
    this.currentChat = currentChat;
  }



}
