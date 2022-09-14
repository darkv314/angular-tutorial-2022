import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(private authService: AuthService) { }


  onLogin() {
    this.authService.login({
      email: 'test@test.com',
      password: '123456',
      returnSecureToken: true,
    }).subscribe(res => {
      console.log('Response: ', res)
    })
  }
}
