import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit {

  token: string = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  sendToken(){
    this.userService.setToken(this.token)
    this.router.navigate(['/buy/b2'])

  }

}
