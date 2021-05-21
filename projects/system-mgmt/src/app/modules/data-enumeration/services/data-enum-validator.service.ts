import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PublicApiService, ApiUrlService } from '@cy/lib/core';

/**
 * 枚举值异步验证器服务类
 */
@Injectable()
export class DataEnumValidatorService {
  constructor(public publicApiService: PublicApiService, public urlService: ApiUrlService, public http: HttpClient) {}

  /**
   * 验证枚举值名称是否存在的异步验证器
   * @param initValue 初始值，当表单控件的值与初始值相对则会验证通过
   */
  dataEnumExistsValidatorAsync = (name: string, parentCode: string) => (control: FormControl) => {
    const { value } = control;
    if (!value || name === value) {
      return of(null);
    }
    const params = {
      name: value,
      parent_code: parentCode
    };
    const exists = true;
    return this.http.get(this.urlService.getApiUrl('/api/v1/data-enumerations'), { params }).pipe(
      map((data: any) => {
        if (data.data.length > 0) {
          return {
            exists
          };
        } else {
          return null;
        }
      })
    );
  };
}
