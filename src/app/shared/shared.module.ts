import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderBarComponent } from './loader-bar/loader-bar.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    LoaderBarComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
