import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataEnumerationComponent } from './data-enumeration.component';
import { DataEnumerationRoutingModule } from './data-enumeration-routing.module';

@NgModule({
  declarations: [DataEnumerationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataEnumerationRoutingModule
  ],
  providers: [
  ]
})
export class DataEnumerationModule {}
