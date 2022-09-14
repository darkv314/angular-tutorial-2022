import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms'

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
  public personForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.personForm = this.formBuilder.group({
      name: '',
      lastName: '',
      age: 0,
      country: ''
    })
  }

  ngOnInit() {
      this.colorControl.valueChanges.subscribe(value =>{
        console.log("Value changes: ", value)
      })

      this.personForm.valueChanges.subscribe(values => {
        console.log("Values: ", values)
      })
  }

  printColorControl(){
    console.log(this.colorControl)
  }

  sendPerson() {
    console.log('Reactive form: ', this.personForm)
  }
  disableName() {
    this.personForm.get('name')?.disable();
  }
  enableName() {
    this.personForm.get('name')?.enable();
  }
}
