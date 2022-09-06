import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{

  bs:number =0;
  usd: number =0
  aData!:any
  newC!:any
  oldC!:any
  dis!:Car[]
  btype!:Car[]
  dtype!:Car[]
  // newC = this.aData.filter(v => v.category === 'sale')
  // oldC = this.aData.filter(v => v.category === 'rental')
  constructor(private carService: CarService) {
    this.carService.getAllCars()
    .subscribe(res => {
      this.newC = res.filter(v => v.category === 'sale')
      this.oldC = res.filter(v => v.category === 'rental')
      this.dis = res.filter(v => v.status === 'disable')
      this.btype = this.dis.filter(v => v.moneyType === 'BS')
      this.dtype = this.dis.filter(v => v.moneyType === 'USD')
    });
    
    
  }

  addBuyRent(element: any) {
    this.usd = this.dtype.reduce(
      (prev, value, index) => prev+value.price,
      0
    )

    this.bs = this.btype.reduce(
      (prev, value, index) => prev+value.price,
      0
    )
  }


}
