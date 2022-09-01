import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private token!: string;
  private message!: string;

  constructor() { }

  setToken(token: string) {
    this.token = token
  }

  getToken() {
    return this.token
  }

  setMessage(message: string){
    this.message=message
  }

  getMessage(){
    return this.message
  }
}
