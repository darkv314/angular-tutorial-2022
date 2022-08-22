import { Component, Input, OnInit } from '@angular/core';
import { Test2Component } from '../test2/test2.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [Test2Component],
})
export class ProductComponent implements OnInit {
  @Input() name!: string;
  @Input() size!: string;
  @Input() stock!: string;
  @Input() type!: string;

  constructor() {}

  ngOnInit() {}
}
