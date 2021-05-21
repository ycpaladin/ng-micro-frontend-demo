import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEmptyComponent } from './pages/page-empty/page-empty.component';
import { Page401Component } from './pages/page-401/page-401.component';
import { ComingSoonPageComponent } from './pages/coming-soon/coming-soon-page.component';

import { AppCommonComponent } from './components/app-common/app-common.component';


@NgModule({
  declarations: [
    PageEmptyComponent,
    Page401Component,
    ComingSoonPageComponent,
    AppCommonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
  ],
  exports: [
    PageEmptyComponent,
    Page401Component,
    ComingSoonPageComponent,
    AppCommonComponent
  ]
})
export class SharedModule { }
