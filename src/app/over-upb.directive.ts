import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[overUpb]',
})
export class OverUpbDirective implements OnChanges {
  @Input() overUpb!: string;
  @Output() sendMessage = new EventEmitter<any>();

  // @Output() overUpb = new EventEmitter<any>()

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event: any) {
    this.element.nativeElement.style.backgroundColor = 'green';
    console.log('event al salir: ', event);
    this.sendMessage.emit({
      id: 0,
      text: 'saliste del elemento',
      x: event.x,
      y: event.y,
    });
  }

  constructor(private element: ElementRef) {}

  ngOnChanges() {
    console.log(this.element);
    this.element.nativeElement.style.backgroundColor = this.overUpb;
  }
}
