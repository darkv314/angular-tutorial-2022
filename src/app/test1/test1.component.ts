import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component implements OnInit, OnChanges {
  constructor() {}

  ngOnInit() {
    console.log('On init');
  }

  ngOnChanges(): void {
    console.log('On changes');
  }
}
