import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineApplication, PlanetPortalApplication } from '@worktile/planet';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}


defineApplication('业务管理', {
  template: '<cy-business-root></cy-business-root>',
  bootstrap: async (portalApp: PlanetPortalApplication) => {
    return platformBrowserDynamic([
      {
        provide: PlanetPortalApplication,
        useValue: portalApp
      }
    ])
      .bootstrapModule(AppModule)
      .then(appModule => {
        return appModule;
      })
      .catch(error => {
        console.error(error);
        return null;
      });
  }
});
