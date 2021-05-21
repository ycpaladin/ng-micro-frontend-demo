// import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from '@worktile/planet';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'business_mgmt',
    component: AppComponent,
    children: [
      {
        path: 'sale_order_mgmt',
        data: {
          breadcrumb: '销售管理',
          redirectTo: 'customer'
        },
        children: [
          {
            path: 'customer',
            loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule),
            data: {
              breadcrumb: '客户资料',
              moduleName: 'Customer'
            },
          },
          {
            path: 'contract_information',
            loadChildren: () => import('./modules/contract-information/contract-information.module').then(m => m.ContractInformationModule),
            data: {
              breadcrumb: '合同信息',
              moduleName: 'Contract'
            },
          },
          { path: 'test2', loadChildren: () => import('./modules/test2/test2.module').then(m => m.Test2Module) },
          { path: '', redirectTo: 'customer', pathMatch: 'full' }
        ],
      },
    ]
  },
  { path: '**', component: EmptyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    // { provide: APP_BASE_HREF, useValue: '/business_mgmt' }
  ]
})
export class AppRoutingModule { }
