import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() name: string = '';
  @Input() lastName: string = '';
  @Input() age: number = 0;

  @Output() print = new EventEmitter<Person>();
  public person: Person = {
    name: '',
    lastName: '',
    age: 0,
  };
  constructor() {}

  ngOnInit() {}

  public onPrint(): void {
    this.print.emit({
      name: this.name,
      lastName: this.lastName,
      age: this.age,
    });
  }
}
