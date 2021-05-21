import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { ModuleName } from 'src/app/core/typings/permission';
import { ModuleServiceBase, UserPremissionService, SearchFilterJson } from '@cy/lib/core';

@Injectable()
export class DataEnumService extends ModuleServiceBase<any, any, any, ModuleName> {
  get getItemUrl(): string {
    return '/api/v1/data-enumerations';
  }
  get stateTransformUrl(): string {
    throw new Error('Method not implemented.');
  }
  get addITemUrl(): string {
    return '/api/v1/data-enumerations';
  }
  get editItemUrl(): string {
    return '/api/v1/data-enumerations';
  }
  get moduleName(): ModuleName {
    return 'System';
  }
  get listQueryUrl(): string {
    return '/api/v1/data-enumerations';
  }
  get deleteItemUrl(): string {
    return '/api/v1/data-enumerations';
  }

  private _searchFilterJson = new BehaviorSubject<SearchFilterJson[]>([]);
  get searchFilterJson$(): BehaviorSubject<SearchFilterJson[]> {
    return this._searchFilterJson;
  }
  fillSearchFilterJson(searchFilterJson: SearchFilterJson[]): Observable<SearchFilterJson[]> {
    return of(searchFilterJson);
  }

  constructor(public http: HttpClient, public userService: UserPremissionService) {
    super(http, userService);
  }
}
