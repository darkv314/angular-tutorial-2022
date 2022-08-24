import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { View1Component } from './view1.component';

const routes: Routes = [
  {
    path: '',
    component: View1Component
  }
]

@NgModule({
  declarations: [View1Component],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class View1Module { }
