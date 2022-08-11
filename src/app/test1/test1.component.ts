import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component implements OnInit, OnChanges {
  @Input() name!: string;
  @Input() lastname: string = 'Perez';

  constructor() {
    console.log('Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes', changes, changes['name'].isFirstChange());

    if (
      changes['name'].isFirstChange !== undefined &&
      !changes['name'].isFirstChange()
    ) {
      console.log('Call country service');
    }
  }

  ngOnInit() {
    console.log('On init');
  }
}
