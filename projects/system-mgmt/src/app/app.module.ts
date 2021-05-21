import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { getSubAppProvider } from '@config';
import { SharedModule } from '@shared/shared.module';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AppRootComponent } from './app.component';
import { NgxPlanetModule } from '@worktile/planet';

registerLocaleData(zh);

const icons: IconDefinition[] = Object.keys(AllIcons).map(key => AllIcons[key]);

const PROVIDERS = getSubAppProvider();

@NgModule({
  declarations: [
    AppRootComponent,
    AppComponent,
  ],
  entryComponents: [AppRootComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    NgxPlanetModule,
  ],
  providers: [
    { provide: NZ_ICONS, useValue: icons },
    { provide: NZ_I18N, useValue: zh_CN },
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
