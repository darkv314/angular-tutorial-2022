import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {

  color: string = ""

  @Input() id!: number;
  @Input() type!: string;
  @Input() colors!: string[];
  @Input() capacity!: number;
  @Input() category!: string;
  @Input() cDate!: string;
  @Input() price!: number;
  @Input() ttype!: any;
  @Input() mType!: string; 
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(color: string) {
    this.color=color;
  }

}
