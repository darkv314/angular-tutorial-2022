import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe(res => {
      console.log('Response cars: ', res)
    })
  }

}
