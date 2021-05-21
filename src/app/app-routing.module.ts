import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EmptyComponent } from '@worktile/planet';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'workbench',
    pathMatch: 'full'
  }, // workbench 是一个微前端应用的URL
  {
    path: '**',
    component: EmptyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
