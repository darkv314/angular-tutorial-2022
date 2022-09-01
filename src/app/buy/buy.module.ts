import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { B1Component } from './b1/b1.component';
import { B2Component } from './b2/b2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    title: 'Buy1',
    path: '',
    component: B1Component
  },
  {
    title: 'Buy2',
    path: 'b2',
    component: B2Component
  },
  {
    title: 'Invoice',
    path: 'invoice',
    loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule) 
  }
]

@NgModule({
  declarations: [
    B1Component,
    B2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BuyModule { }
