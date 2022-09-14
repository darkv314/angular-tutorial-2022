import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private carService: CarService, 
    private authService: AuthService) { }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe(res => {
      console.log('Response cars: ', res)
    })
  }

  /**
   * Logout to go to Login view
   * @public
   */

  public onLogout(): void {
    this.authService.logout();
  }

}
