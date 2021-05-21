import { ApiUrlService } from '@cy/lib/core/services/api-url.service';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IForm, ResponseData } from '@cy/lib/core';
import { DataEnumeration } from '../models';
import { DataEnumValidatorService } from './data-enum-validator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export const dataEnumeration: DataEnumeration = {
  id: '',
  parent_enum_name: '',
  enumeration_code: '',
  parent: '',
  name: '',
  mnemonic_code: '',
  system_parameters: false,
  system_param: '',
  remark: '',
  parent_code: ''
};
@Injectable()
export class DataEnumFormService implements IForm<DataEnumeration> {
  constructor(
    public fb: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    public urlService: ApiUrlService,
    public validatorService: DataEnumValidatorService
  ) {}

  getParentDataEnum(parentCode: string) {
    return this.http
      .get<ResponseData<any>>(this.urlService.getApiUrl(`/api/v1/data-enumerations/enumeration_code/${parentCode}`))
      .pipe(map(data => data.data));
  }

  createForm(): Observable<FormGroup> {
    return this.activatedRoute.params.pipe(
      map(params => params.parentCode),
      mergeMap(parentCode => (parentCode ? this.getParentDataEnum(parentCode) : of(null))),
      map(parent => {
        return this.fb.group({
          // 父枚举值名称
          parent_enum_name: this.fb.control({ value: (parent && parent.name) || '父枚举值名称，新增一级时为空', disabled: true }),
          // 父枚举值code
          parent_code: [parent && parent.enumeration_code],
          // 辅助属性编码
          enumeration_code: [{ value: '保存后系统自动生成', disabled: true }],
          // 辅助属性名称
          name: [
            '',
            [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-zA-Z0-9\u4E00-\u9fA5\_-]+$/)],
            [this.validatorService.dataEnumExistsValidatorAsync('', (parent && parent.enumeration_code) || '')]
          ],
          // 助记码
          mnemonic_code: ['', [Validators.pattern(/^[a-zA-Z0-9\_-]*$/), Validators.maxLength(30)]],
          // 系统配置项
          system_parameters: [
            false
            // 系统配置项  页面显示使用：是/否
          ],
          system_param: ['否'],
          // 备注信息
          remark: ['', [Validators.maxLength(200)]]
        });
      })
    );
  }

  modifyForm(data: DataEnumeration): FormGroup {
    const { enumeration_code, name, mnemonic_code, remark, system_parameters, parent_code, parent } = data;
    return this.fb.group({
      // 辅助属性编码
      enumeration_code: [{ value: enumeration_code, disabled: true }],
      // 辅助属性名称
      name: [
        name,
        [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-zA-Z0-9\u4E00-\u9fA5\_-]+$/)],
        [this.validatorService.dataEnumExistsValidatorAsync(name, parent_code)]
      ],
      // 上级编码
      parent_code: [parent_code === null ? '' : parent_code],
      // 系统配置项
      system_parameters: [system_parameters],
      // 系统配置项，页面显示使用
      system_param: [system_parameters ? '是' : '否'],
      // 助记码
      mnemonic_code: [mnemonic_code, [Validators.pattern(/^[a-zA-Z0-9\_-]*$/), Validators.maxLength(30)]],
      // 备注信息
      remark: [remark, [Validators.maxLength(200)]]
    });
  }
}
