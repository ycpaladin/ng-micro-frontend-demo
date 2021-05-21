import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerListComponent } from './pages/customer-list/customer-list.component';

const customerRoutes: Routes = [
  {
    path: '',
    component: CustomerListComponent, data: {
      title: '客户资料',
      breadcrumb: '客户资料',
      permission: 'view',
    }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
