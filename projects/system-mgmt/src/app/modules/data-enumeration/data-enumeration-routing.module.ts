import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataEnumerationComponent } from './data-enumeration.component';

const routes: Routes = [
  {
    path: '',
    component: DataEnumerationComponent,
    data: {
      title: '枚举值信息',
      breadcrumb: '枚举值信息',
      permission: 'view'
    },
    children: [

    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataEnumerationRoutingModule {}
