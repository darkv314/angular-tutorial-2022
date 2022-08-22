import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';
  color: string = 'red';

  getMessage(event: any) {
    console.log('Evento al padre: ', event);
  }
}
