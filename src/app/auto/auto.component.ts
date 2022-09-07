import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { CarService } from '../car.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent  {

  color: string = ""
  showId: boolean = false
  showMessage: boolean = false

  @Input() id!: number;
  @Input() type!: string;
  @Input() colors!: string[];
  @Input() capacity!: number;
  @Input() category!: string;
  @Input() cDate!: string;
  @Input() price!: number;
  @Input() ttype!: any;
  @Input() mType!: string; 
  @Input() status!: string;
  @Input() isdisable!: boolean;
  @Output() buyRent = new EventEmitter();
  constructor(private carClient: CarService) { }


  handleClick(color: string) {
    this.color=color;
    this.carClient.changeColor(this.id, {
      currentColor: this.color
    }).subscribe()
  }


  onBuyRent() {
    this.isdisable=true;
    this.carClient.changeStatus(this.id, {
      status: 'disable'
    }).subscribe()
    
    this.buyRent.emit({
      category: this.category,
      price: this.price,
      moneyType: this.mType
    })
  }

}
