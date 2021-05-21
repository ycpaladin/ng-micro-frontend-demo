import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractInformationListComponent } from './pages/contract-information-list/contract-information-list.component';

const routes: Routes = [{
  path: '',
  component: ContractInformationListComponent,
  data: {
    title: '合同信息',
    addText: '合同信息',
    breadcrumb: '合同信息',
    permission: 'view'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractInformationRoutingModule { }
