import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxPlanetModule } from '@worktile/planet';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { IconsProviderModule } from './icons-provider.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { getRegistrableAppConfig } from '@config';
import { SharedModule } from '@shared/shared.module';

registerLocaleData(zh);


const apps = getRegistrableAppConfig();

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzModalModule,
    AppRoutingModule,
    IconsProviderModule,
    SharedModule,
    NzLayoutModule,
    NzGridModule,
    NzMenuModule,
    NgxPlanetModule.forRoot(apps)
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
