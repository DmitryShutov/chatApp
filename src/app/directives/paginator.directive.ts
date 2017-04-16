import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appPaginator]'
})
export class PaginatorDirective {
  @Output() onScrollDown = new EventEmitter<boolean>();

  @HostListener('scroll', ['$event'])
  onScroll(event): void {
    if (event.srcElement.scrollTop + event.srcElement.offsetHeight >= event.srcElement.scrollHeight) {
      this.onScrollDown.emit(true);
    }
  }

}
