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
  get message() {
    return this._message;
  }
  @Input()
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
}
