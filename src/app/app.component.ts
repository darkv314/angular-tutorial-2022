import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{

  valb=0;
  vald=0;
  valb1=0;
  vald1=0;
  bs:number =0;
  usd: number =0
  bs1:number =0;
  usd1: number =0
  aData!:any
  newC!:any
  oldC!:any
  dis!:Car[]
  btype!:Car[]
  dtype!:Car[]
  brtype!:Car[]
  drtype!:Car[]
  // newC = this.aData.filter(v => v.category === 'sale')
  // oldC = this.aData.filter(v => v.category === 'rental')
  constructor(private carService: CarService) {
    this.carService.getAllCars()
    .subscribe(res => {
      this.newC = res.filter(v => v.category === 'sale')
      this.oldC = res.filter(v => v.category === 'rental')
      this.dis = res.filter(v => v.status === 'disable')
      this.btype = this.dis.filter(v => (v.moneyType === 'BS' && v.category === 'sale'))
      this.dtype = this.dis.filter(v => (v.moneyType === 'USD' && v.category === 'sale'))
      this.brtype = this.dis.filter(v => (v.moneyType === 'BS' && v.category === 'rental'))
      this.drtype = this.dis.filter(v => (v.moneyType === 'USD' && v.category === 'rental'))
      this.usd = this.dtype.reduce(
        (prev, value, index) => prev+value.price,
        0
      )
  
      this.bs = this.btype.reduce(
        (prev, value, index) => prev+value.price,
        0
      )

      this.usd1 = this.drtype.reduce(
        (prev, value, index) => prev+value.price,
        0
      )
  
      this.bs1 = this.brtype.reduce(
        (prev, value, index) => prev+value.price,
        0
      )
      this.valb = this.bs
      this.vald = this.usd
      this.valb1 = this.bs1
      this.vald1 = this.usd1
    });
    
    
  }

  addBuyRent(e: {category: string, price: number, moneyType: string}) {
    console.log(e.moneyType, e.price, e.category)
    if(e.category==="sale") {
      console.log(e)
      if(e.moneyType==="BS") {
        this.valb = this.valb + e.price
      } else {
        this.vald = this.vald + e.price
      }
    } else {
      if(e.moneyType==="BS") {
        this.valb1 = this.valb1 + e.price
      } else {
        this.vald1 = this.vald1 + e.price
      }
    }

  }


}
