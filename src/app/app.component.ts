import { Component } from '@angular/core';
import { data } from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  aData = Object.values(data.data)
  newC = this.aData.filter(v => v.category === 'sale')
  oldC = this.aData.filter(v => v.category === 'rental')
}
