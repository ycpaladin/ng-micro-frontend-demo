import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

import { Planet, SwitchModes } from '@worktile/planet';
import { isBoolean } from 'lodash';

import { APPS_CONFIG } from '@config';


@Component({
  selector: 'cy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {


  isSubAppPageUrl$: Observable<boolean>;
  isSubAppPageUrl = true;
  constructor(
    public router: Router,
    private planet: Planet,
  ) {
  }

  ngOnInit(): void {
    const routerEventSource$ = this.router.events.pipe(
      startWith(true),
      filter((event: boolean | RouterEvent) => event instanceof NavigationEnd || (isBoolean(event) && event === true)),
    );

    this.isSubAppPageUrl$ = routerEventSource$.pipe(
      map(() => {
        const r = APPS_CONFIG.some(conf => location.pathname.indexOf(conf.activeRule) !== -1);
        return r;
      })
    );

    this.isSubAppPageUrl$.subscribe(v => {
      // this.ngZone.run(() => {
        this.isSubAppPageUrl = v;
      // });
    });

    this.planet.setOptions({
      switchMode: SwitchModes.coexist,
      errorHandler: error => {
        console.log('', error);
      }
    });

    this.planet.start();

    this.planet.appsLoadingStart.subscribe(event => {
      const activeAppNames = event.shouldLoadApps.map(item => item.name);
      console.log(`active app names: ${activeAppNames.join(',')}`);
  });
  }

  ngAfterViewInit(): void {
  }
}
