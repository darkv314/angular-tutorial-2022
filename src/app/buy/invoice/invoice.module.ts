import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { In1Component } from './in1/in1.component';
import { In2Component } from './in2/in2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    title: 'Invoice1',
    path: '',
    component: In1Component
  },
  {
    title: 'Invoice2',
    path: 'in2',
    component: In2Component
  }
]

@NgModule({
  declarations: [
    In1Component,
    In2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InvoiceModule { }
