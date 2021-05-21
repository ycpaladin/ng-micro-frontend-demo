import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrintMgmtRoutingModule } from './print-mgmt-routing.module';
import { PrintMgmtListComponent } from './pages/print-mgmt-list/print-mgmt-list.component';



@NgModule({
  declarations: [
    PrintMgmtListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrintMgmtRoutingModule
  ],
  providers: [
  ]
})
export class PrintMgmtModule { }
