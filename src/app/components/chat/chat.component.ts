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
   this.ChatService.createChat()
     .subscribe(
       (response) =>  {
         console.log(response);
       },
       error => console.error(error)
     );

    this.message = new FormGroup({
      message: new FormControl(''),
    });
  }

  onSubmit({value}: {value}) {
    this.ChatService.sendMessage(value)
      .subscribe(
        (response) => console.log(response),
        error => console.log(error));
  }



}
