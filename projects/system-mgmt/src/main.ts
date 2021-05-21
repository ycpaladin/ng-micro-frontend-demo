import { enableProdMode, NgZone } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { getSingleSpaExtraProviders, singleSpaAngular } from 'single-spa-angular';

// import { singleSpaPropsSubject } from 'single-spa/single-spa-props';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { defineApplication, PlanetPortalApplication } from '@worktile/planet';


if (environment.production) {
  enableProdMode();
}

defineApplication('系统管理', {
  template: '<cy-system-mgmt-root></cy-system-mgmt-root>',
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
