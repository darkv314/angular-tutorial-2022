import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-in1',
  templateUrl: './in1.component.html',
  styleUrls: ['./in1.component.scss']
})
export class In1Component implements OnInit {

  message: string = ''

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.message = this.userService.getMessage()
  }

}
