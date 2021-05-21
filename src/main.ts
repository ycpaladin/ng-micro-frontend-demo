import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


/**
 * Step1 初始化应用
 */

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

