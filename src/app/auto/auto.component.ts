import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {

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
  @Output() buyRent = new EventEmitter();
  constructor(private carClient: CarService) { }

  ngOnInit(): void {
  }

  handleClick(color: string) {
    this.color=color;
    this.carClient.changeColor(this.id, {
      currentColor: this.color
    }).subscribe()
  }

  onBuyRent() {
    this.showMessage = true;
    this.carClient.changeStatus(this.id, {
      status: 'disable'
    }).subscribe()
    this.buyRent.emit({
      category: this.category,
      price: this.price,
      moneyTipe: this.mType
    })
  }

}
