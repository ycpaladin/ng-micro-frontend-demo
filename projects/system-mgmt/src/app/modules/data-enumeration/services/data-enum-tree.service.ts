import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/tree';

import {
  TreeServiceBase,
  ExpandKeyRoute,
  SearchTreeResult,
  ApiUrlService,
  IMenuItem,
  ADD_NODE_TITLE,
  ResponseData,
  formatNameAndCode,
  UserPremissionService,
  MenuClickHandler
} from '@cy/lib/core';
import { ModuleName } from '@models';

@Injectable()
export class DataEnumTreeService extends TreeServiceBase<any, ModuleName> {
  rootMenuClickHandler: MenuClickHandler;

  get expandKeyRoute(): ExpandKeyRoute[] | Observable<ExpandKeyRoute[]> {
    return [
      { partUrl: 'data-enumeration/1/', level: [1] },
      { partUrl: 'data-enumeration/2/', level: [2] },
      { partUrl: 'data-enumeration/3/', level: [3] }
    ];
  }
  get canAddFirstNode(): boolean {
    return false;
  }
  get maxDepth(): number {
    return 3;
  }
  get treeDataApiUrl(): string {
    return this.urlService.getApiUrl('/api/v1/data-enumerations/tree');
  }

  get menuItemConfig(): IMenuItem[] {
    return [
      {
        name: '添加同级节点',
        cammand: 'newBrotherNode',
        visable: (node: NzTreeNode) => node.level > 0 && node.title !== ADD_NODE_TITLE
      },
      {
        name: '添加子节点',
        cammand: 'newChildNode',
        visable: (node: NzTreeNode) => node.level < 3 && node.level < this.maxDepth && node.title !== ADD_NODE_TITLE
      },
      {
        name: '编辑',
        cammand: 'editNode',
        visable: (node: NzTreeNode) => node.level > 0 && node.title !== ADD_NODE_TITLE,
        disabled: (node: NzTreeNode) => node.origin.editable === false
      },
      {
        name: '删除',
        cammand: 'deleteNode',
        visable: (node: NzTreeNode) => node.level > 0,
        disabled: (node: NzTreeNode) => node.origin.deletable === false
      }
    ];
  }

  searchTree(search_global__icontains: string): Observable<SearchTreeResult[]> {
    if (!search_global__icontains) {
      return of([]);
    }
    return this.searchDataEnum({ search_global__icontains });
  }

  searchDataEnum(params: { [key: string]: any }, type?: string): Observable<SearchTreeResult[]> {
    return this.http
      .get<ResponseData<any[]>>(this.urlService.getApiUrl('/api/v1/data-enumerations'), {
        params
      })
      .pipe(
        map(data => data.data),
        map(data => {
          return data.map(item => ({
            id: item.id,
            name: formatNameAndCode(item.name, item.mnemonic_code),
            origin: {
              source: item,
              type
            }
          }));
        }),
        catchError(() => of([]))
      );
  }

  getTreeData(params: { [key: string]: any } = {}): Observable<NzTreeNodeOptions[]> {
    return super.getTreeData({
      ...params,
      show_parameters: 'true'
    });
  }

  constructor(public http: HttpClient, public urlService: ApiUrlService, public userPermission: UserPremissionService) {
    super(http);
  }
}
