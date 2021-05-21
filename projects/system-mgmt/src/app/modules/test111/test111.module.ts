import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test111RoutingModule } from './test111-routing.module';
import { Test111Component } from './test111.component';


@NgModule({
  declarations: [
    Test111Component
  ],
  imports: [
    CommonModule,
    Test111RoutingModule
  ]
})
export class Test111Module { }
