import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View2Component } from './view2/view2.component';
import { View1Component } from './view1/view1.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        title: 'soy view 1',
        path: 'view1',
        component: View1Component
      },
      {
        title: 'soy view 2',
        path: 'view2',
        component: View2Component
      }
    ]
  }
];

@NgModule({
  declarations: [DashboardComponent, View1Component, View2Component],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
