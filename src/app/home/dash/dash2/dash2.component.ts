import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-dash2',
  templateUrl: './dash2.component.html',
  styleUrls: ['./dash2.component.scss']
})
export class Dash2Component implements OnInit {

  message: string = ''

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.userService.setMessage(this.message)
    this.router.navigate(['/buy/invoice'])
  }

}
