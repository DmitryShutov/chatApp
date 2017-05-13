import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class UIService {
  private showContactsSource = new Subject<boolean>();
  
  showContact$ = this.showContactsSource.asObservable();
  
  onShowContract(isShow: boolean) {
    this.showContactsSource.next(isShow);
  }
  
}
