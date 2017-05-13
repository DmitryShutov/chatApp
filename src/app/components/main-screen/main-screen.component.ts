import { Component, OnInit } from '@angular/core';
import {Chat} from '../../classes/chat';
import {UIService} from "../../services/ui.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  currentChat: Chat;
  showContactsList = false;
  onShowContactsSubscribe: Subscription;

  constructor(private UIService: UIService) {
    this.onShowContactsSubscribe = UIService.showContact$.subscribe(
      isShow => {
        this.showContactsList = isShow;
      }
    )
  }

  ngOnInit() {

  }

  onSelectChat(currentChat: Chat) {
    this.currentChat = currentChat;
  }
  
  onShowContactsList($event: boolean) {
    if ($event) {
      this.showContactsList = $event;
    }
  }
}
