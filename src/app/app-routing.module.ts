import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { View1Component } from './dashboard/view1/view1.component';
import { View2Component } from './dashboard/view2/view2.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: 'error'
  }
  // {
  //   title: 'Login',
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // {
  //   title: 'Dashboard',
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   children: [
  //     {
  //       path: 'view1',
  //       component: View1Component,
  //     },
  //     {
  //       path: 'view2',
  //       component: View2Component,
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
