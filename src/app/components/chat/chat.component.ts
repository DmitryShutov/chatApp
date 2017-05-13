import {Component, Input, OnInit} from '@angular/core';
import {Chat} from '../../classes/chat';
import {ChatService} from '../../services/chat.service';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() currentChat: Chat;
  message: FormGroup;

 constructor(private ChatService: ChatService) {
 }

  ngOnInit() {
    this.message = new FormGroup({
      newMessage: new FormControl(''),
    });
    this.createChat();
  }

  createChat() {
    if (this.currentChat.id) {
      this.ChatService.setCurrentChat(this.currentChat);
      return;
    }
    this.ChatService.createChat()
      .subscribe(
        (chat: Chat) =>  {
          this.currentChat = chat;
          this.ChatService.setCurrentChat(this.currentChat);
        },
        error => console.error(error)
      );
  }
  
  // TODO не готов сервер, проверить метод после готовности сервера
  onDeleteChat() {
   this.ChatService.deleteChat()
     .subscribe(
       (req) => {
         console.log(req);
         this.ChatService.dropCurrentChat();
       },
       (error) => console.error(error),
     );
  }

  /*
  getChat() {
   this.ChatService.getChat()
     .subscribe(
       (chat) => {
         console.log(chat)
       },
       error => console.error(error)
     )
  }
  */

  onSubmit() {
    if (!this.message.value.newMessage) {
      return;
    }
    this.ChatService.sendMessage(this.message.value.newMessage)
      .subscribe(
        (response) => console.log(response),
        error => console.log(error));
  }



}
