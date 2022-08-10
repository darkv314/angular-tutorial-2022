import { Component } from '@angular/core';
import { Person } from './person/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';
  public person!: Person;

  public student: string = 'Example juan';

  public a: number = 1;
  public b: number = 2;

  getPrint(event: Person, idPerson?: string) {
    console.log('Hi parent component: ', event);
    this.person = event;
  }

  getLastName(event: any) {
    console.log('Last name: ', event);
  }

  getPrintName(name: any) {
    console.log('Print name: ', name.value);
  }
}
