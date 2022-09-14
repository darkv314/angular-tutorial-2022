import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  private message: boolean = false;

  constructor(private authService: AuthService,
    private router: Router) { 
    }

  // onTest() {
  //   console.log(this.loginForm)
  // }

  onLogin(loginForm: any) {
    if(loginForm.valid){
      this.authService.login({
        email: loginForm.value.email,
        password: loginForm.value.pass,
        returnSecureToken: true,
      }).subscribe(res => {
        console.log('Login: ', res)
        this.router.navigate(['home'])
      })
    } else {
      this.message=true
    }
  }

  onReg (){
    this.router.navigate(['register'])
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
