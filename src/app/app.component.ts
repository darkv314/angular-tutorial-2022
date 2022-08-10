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

  getPrint(event: Person, idPerson?: string) {
    console.log('Hi parent component: ', event);
    this.person = event;
  }
}
