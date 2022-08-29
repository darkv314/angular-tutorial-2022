import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SubadminComponent } from './subadmin/subadmin.component';
import { Admin1Component } from './admin1/admin1.component';
import { Admin2Component } from './admin2/admin2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    title: 'SubAdmin',
    path: 'subAdmin',
    component: SubadminComponent
  },
  {
    title: 'Admin',
    path: '',
    component: AdminComponent,
    children: [
      {
        title: 'Admin1',
        path: 'admin1',
        component: Admin1Component,
      },
      {
        title: 'Admin2',
        path: 'admin2',
        component: Admin2Component
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    SubadminComponent,
    Admin1Component,
    Admin2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
