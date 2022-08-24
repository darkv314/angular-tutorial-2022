import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
        loadChildren: () => import('./view1/view1.module').then(m => m.View1Module)
      },
      {
        title: 'soy view 2',
        path: 'view2',
        loadChildren: () => import('./view2/view2.module').then(m => m.View2Module)
      }
    ]
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
