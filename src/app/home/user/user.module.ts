import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    title: 'user1',
    path: '',
    component: User1Component
  },
  {
    title: 'user2',
    path: 'user2',
    component: User2Component
  }
]

@NgModule({
  declarations: [
    User1Component,
    User2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
