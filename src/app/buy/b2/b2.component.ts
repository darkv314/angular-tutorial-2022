import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-b2',
  templateUrl: './b2.component.html',
  styleUrls: ['./b2.component.scss']
})
export class B2Component implements OnInit {

  token: string ='';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.token = this.userService.getToken()
  }



}
