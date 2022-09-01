import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dash1Component } from './dash1/dash1.component';
import { Dash2Component } from './dash2/dash2.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    title: 'dash1',
    path: '',
    component: Dash1Component
  },
  {
    title: 'dash2',
    path: 'dash2',
    component: Dash2Component
  }
]

@NgModule({
  declarations: [
    Dash1Component,
    Dash2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class DashModule { }
