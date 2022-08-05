import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';

  constructor() {
    console.log('Hi');
  }

  // Arrow function examples
  // const getName = (name: string) => {return "hi "+ name;}
  // const getName = (name: string) => "hi " + name;
  // const getName = () =>  "Hi"
  // const getName = (name: string, lastName: string) => lastName;
  // const mult = num => num*2;

  private getName(name: string): string {
    return 'hi ' + name;
  }
}
