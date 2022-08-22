import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit, OnChanges {
  @Input()
  get message() {
    return this._message;
  }
  set message(value: string) {
    console.log('a', this._message);
    this._message = value + '-';
  }

  private _message = '';

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  get name(){
    return ''
  }

  set name(value: string){
    this.name = value;
  }
}
