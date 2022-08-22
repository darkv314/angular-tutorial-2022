import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[idShow]'
})
export class IdShowDirective{

  @Input() idShow!:boolean;

  // ngOnChanges() {
  //   if(this.idShow)
  //   this.viewContainer.createEmbeddedView(this.templateRef);
  //   else 
  //   this.viewContainer.clear()
  // }

  constructor() { }


  @HostListener('mouseenter') onMouseEnter() {
    //this.idShow=true;
    console.log('Entrando')
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave() {
    //this.idShow=false;
    console.log('Saliendo')
  }
}
