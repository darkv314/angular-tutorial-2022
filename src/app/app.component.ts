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

    const auxFindIndex = [1, 2, 3, 4, 5].findIndex((num) => num === 5);
    console.log('auxFindIndes: ', auxFindIndex);

    const auxIndexOf = [1, 2, 3, 4, 5].indexOf(5);
    console.log('auxIndexOf: ', auxIndexOf);

    const auxIndexOfString = 'Hola mundo Test'.indexOf('Test');
    console.log('auxIndexOfString: ', auxIndexOfString);

    const auxFilter = [1, 2, 3, 4, 5].filter((num) => num % 2 === 0);
    console.log('auxFilter: ', auxFilter);

    const auxJoin = [1, 2, 3, 4, 5].join('*****');
    console.log('auxJoin: ', auxJoin);

    const auxSplit = 'Hola, mundo, test'.split(',');
    console.log('auxSplit: ', auxSplit);
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
