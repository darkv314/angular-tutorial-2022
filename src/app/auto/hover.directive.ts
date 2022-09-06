import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[hover]'
})
export class HoverDirective {

  @Output() hover = new EventEmitter<boolean>();

  @HostListener('mouseenter') onMouseEnter() {
    this.hover.emit(true)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover.emit(false)
  }

  constructor() { }

}
