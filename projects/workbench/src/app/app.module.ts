import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AppRootComponent } from './app.component';
import { EmptyComponent } from './pages/empty/empty.component';

@NgModule({
  declarations: [
    AppRootComponent,
    AppComponent,
    EmptyComponent
  ],
  entryComponents: [AppRootComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
