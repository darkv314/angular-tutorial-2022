import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[overUpb]',
})
export class OverUpbDirective implements OnChanges {
  @Input() overUpb!: string;
  constructor(private element: ElementRef) {}

  ngOnChanges() {
    console.log(this.element); 
    this.element.nativeElement.style.backgroundColor = this.overUpb;
  }
}
