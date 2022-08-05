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

    const auxMap = [1, 2, 3, 4, 5].map((num) => num + 2);
    console.log('auxMap: ', auxMap);

    const auxForEach = [1, 2, 3, 4, 5].forEach((num) => num + 2);
    console.log('auxForEach: ', auxForEach);

    const auxFind = [1, 2, 3, 4, 5].find((num) => num === 6);
    console.log('autoFind: ', auxFind);
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
