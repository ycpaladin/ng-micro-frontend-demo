import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintMgmtListComponent } from './pages/print-mgmt-list/print-mgmt-list.component';


const routes: Routes = [{
  path: '',
  component: PrintMgmtListComponent,
  data: {
    title: '打印配置',
    breadcrumb: '打印配置',
    permission: 'view',
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintMgmtRoutingModule { }
