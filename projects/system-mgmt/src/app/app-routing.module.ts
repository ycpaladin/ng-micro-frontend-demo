import { EmptyComponent } from '@worktile/planet';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page401Component } from 'src/app/shared/pages/page-401/page-401.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'system_mgmt',
    component: AppComponent,
    children: [
      // 基础配置
      {
        path: 'basic_config',
        data: {
          breadcrumb: '基础配置'
        },
        children: [
          // 不良枚举类型信息
          {
            path: 'data-enumeration',
            loadChildren: () => import('./modules/data-enumeration/data-enumeration.module').then(m => m.DataEnumerationModule),
            data: {
              breadcrumb: '枚举值信息',
              moduleName: 'System'
            },
          },
          // 打印配置
          {
            path: 'print_configuration',
            loadChildren: () => import('./modules/print-mgmt/print-mgmt.module').then(m => m.PrintMgmtModule),
            data: {
              breadcrumb: '打印配置',
              moduleName: 'System'
            },
          },
          { path: 'test1', loadChildren: () => import('./modules/test111/test111.module').then(m => m.Test111Module) },
          { path: '', redirectTo: 'data-enumeration', pathMatch: 'full' }
        ]
      },
      { path: '401', component: Page401Component },
      { path: '', redirectTo: 'basic_config', pathMatch: 'full' },
    ]
  },
  { path: '**', component: EmptyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
