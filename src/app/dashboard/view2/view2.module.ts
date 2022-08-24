import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { View2Component } from './view2.component';

const routes: Routes = [
  {
    path: '',
    component: View2Component
  }
]

@NgModule({
  declarations: [View2Component],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class View2Module { }
