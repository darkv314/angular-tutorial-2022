import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';

  constructor() {
    // Clase 05/08/2022
    // console.log('Hi');

    // const auxMap = [1, 2, 3, 4, 5].map((num) => num + 2);
    // console.log('auxMap: ', auxMap);

    // const auxForEach = [1, 2, 3, 4, 5].forEach((num) => num + 2);
    // console.log('auxForEach: ', auxForEach);

    // const auxFind = [1, 2, 3, 4, 5].find((num) => num === 6);
    // console.log('autoFind: ', auxFind);

    // const auxFindIndex = [1, 2, 3, 4, 5].findIndex((num) => num === 5);
    // console.log('auxFindIndes: ', auxFindIndex);

    // const auxIndexOf = [1, 2, 3, 4, 5].indexOf(5);
    // console.log('auxIndexOf: ', auxIndexOf);

    // const auxIndexOfString = 'Hola mundo Test'.indexOf('Test');
    // console.log('auxIndexOfString: ', auxIndexOfString);

    // const auxFilter = [1, 2, 3, 4, 5].filter((num) => num % 2 === 0);
    // console.log('auxFilter: ', auxFilter);

    // const auxJoin = [1, 2, 3, 4, 5].join('*****');
    // console.log('auxJoin: ', auxJoin);

    // const auxSplit = 'Hola, mundo, test'.split(',');
    // console.log('auxSplit: ', auxSplit);

    // Clase 08/08/2022
    const A = ['a', 'b', 'c', 'd', 'e'];
    const auxSplice = A.splice(1, 1);
    console.log('auxSplice: ', auxSplice);

    const auxReduce = [1, 2, 3, 4, 5].reduce(
      (prev, value, index) => prev + value,
      0
    );
    console.log('auxReduce: ', auxReduce);

    // JSON Operators
    const auxJson = {
      id: 1,
      name: 'Juan',
      lastName: 'Gutierrez',
    };

    const auxEntries = Object.entries(auxJson);
    console.log('auxEntries: ', auxEntries);

    const auxKeys = Object.keys(auxJson);
    console.log('auxKeys: ', auxKeys);

    const auxValues = Object.values(auxJson);
    console.log('auxValues: ', auxValues);

    const a = 1;

    for (var i = 1; i <= 5; i++) {
      console.log('Index', i);
    }

    const b = [1, 2, 3, 4, 5];
    const c = [...b, ...b, 6, 7, 8];
    console.log(c);

    this.getRest(1, 2, 'hola');

    const person = {
      id: 1,
      name: 'Juan',
      country: {
        idCountry: 1,
        cod: 'LP',
      },
    };

    const { country } = person;
    console.log('country: ', country);


    const data = {
      0: {
        id: 1,
        name: 'juan',
        age: 10
      }, 
      1: {
        id: 2,
        name: 'Lola',
        age: 24
      }
    };

    //convertir a un array y obtener la edad de edades

    const resp = Object.values(data).reduce((prev, value) => prev + value.age, 0);
    console.log('resp: ', resp)

    //convertir a array, filtrar las personas mayores a 10 y mostrar solo los id

    const ar = [];

    const resp1 = Object.values(data).filter(ob => ob.age > 10).map(ob => ob.id)
    console.log('resp1: ', resp1)
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

  getRest(...params: any[]) {
    console.log('Rest: ', params);
  }
}
