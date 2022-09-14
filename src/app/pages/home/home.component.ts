import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CarService } from '../services/torneo.service';
import {Store} from "@ngrx/store";
import {closeSidePanel, openSidePanel} from "../../redux/home.actions";
import { RootState } from "../../redux";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  openPanel: boolean = false;

  sPanel = false;

  showFiller = false;

  public torneos!: any

  constructor(private carService: CarService, 
    private authService: AuthService,
    private store: Store) { }

  ngOnInit(): void {
    this.carService.getAllTorneos().subscribe(res => {
      this.torneos = res
    })

    this.store.select((s: any) => s.home).subscribe(s => {
      console.log('STORE: ', s)
      this.openPanel = s.sidePanel;
      console.log('RESPONSE CARS: ', s, this.openPanel)
    })
  }

  onSubmit(form: any) {
    if(form.valid){
      this.carService.createTorneo({
        title: form.value.title,
        startDate: form.value.sDate,
        endDate: form.value.eDate
      }).subscribe(res => {
        this.sPanel = false;
        window.location.reload()
      })
    }
    
  }

  onOpenPanel() {
    this.sPanel=true
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
