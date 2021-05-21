import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test111Component } from './test111.component';

const routes: Routes = [{ path: '', component: Test111Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test111RoutingModule { }
