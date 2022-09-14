import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }


  onLogin() {
    this.authService.login({
      email: 'test@test.com',
      password: '123456',
      returnSecureToken: true,
    }).subscribe(res => {
      console.log('Response: ', res)
      this.router.navigate(['home'])
    })
  }

  onCreate() {
    this.authService.createUser({
      email: 'test2@test.com',
      password: '123456',
      returnSecureToken: true
    }).subscribe(res => {
      console.log('Create user: ', res)
    })
  }

  ngOnInit(): void {
    /*if(this.authService.verifyLogged()){
    this.router.navigate(['home'])
    }*/
  }
}
