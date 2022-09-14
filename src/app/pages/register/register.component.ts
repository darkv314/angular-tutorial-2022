import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router:Router) {
    this.regForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.minLength(5), Validators.email]],
        pass: ['', [Validators.required, Validators.minLength(6)]]
      }
    )
  }

  ngOnInit(): void {
  }

  onRegister() {
    if(this.regForm.valid){
      this.authService.createUser({
        email: this.regForm.value.email,
        password: this.regForm.value.pass,
        returnSecureToken: true
      }).subscribe(res => {
        console.log('Reg: ', res)
        this.router.navigate(['home'])
      })
    }
  }

}
