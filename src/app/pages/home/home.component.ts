import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CarService } from '../services/car.service';
import {Store} from "@ngrx/store";
import {closeSidePanel, openSidePanel} from "../../redux/home.actions";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private carService: CarService, 
    private authService: AuthService,
    private store: Store) { }

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

  onOpenSidePanel() {
    this.store.dispatch(openSidePanel())
  }

  onCloseSidePanel() {
    this.store.dispatch(closeSidePanel())
  }

}
