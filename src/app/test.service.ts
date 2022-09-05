import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  name = 'Hola'
  constructor() { }

  getName() {
    return 'Ricardo'
  }

  setName(name: string) {
    this.name = name
  }
}
