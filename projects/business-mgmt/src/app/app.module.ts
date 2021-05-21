import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import zh from '@angular/common/locales/zh';
import { HttpClientModule } from '@angular/common/http';

import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';

import { SharedModule } from '@shared/shared.module';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AppRootComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(zh);

const icons: IconDefinition[] = Object.keys(AllIcons).map(key => AllIcons[key]);


@NgModule({
  declarations: [
    AppRootComponent,
    AppComponent,
  ],
  entryComponents: [AppRootComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    { provide: NZ_ICONS, useValue: icons },
    { provide: NZ_I18N, useValue: zh_CN },
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
