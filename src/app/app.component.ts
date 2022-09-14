import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test';

  onSubmit(form: any){
    console.log('Form: ', form)
  }

  public colorControl = new FormControl('');

  ngOnInit() {
      this.colorControl.valueChanges.subscribe(value =>{
        console.log("Value changes: ", value)
      })
  }

  printColorControl(){
    console.log(this.colorControl)
  }
}
