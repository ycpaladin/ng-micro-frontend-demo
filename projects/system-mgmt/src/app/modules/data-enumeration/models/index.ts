import { DataEnumerationComponent } from './../data-enumeration.component';
import { IDataItem } from '@cy/lib/core';

/**
 * 枚举值
 */
export type DataEnumeration = IDataItem &
  DataEnumerationFormModel & {
    /**
     * 创建人姓名
     */
    creator?: string;
    /**
     * 创建人登录名
     */
    creator_name?: string;
    /**
     * 创建时间
     */
    create_time?: string;
  };

export type FieldType = '字符型' | '数值型' | '枚举型';

/**
 * 枚举值表单
 */
export interface DataEnumerationFormModel {
  /**
   * 枚举值编码
   */
  enumeration_code: string;

  /**
   * 枚举值名称
   */
  name: string;

  /**
   * 枚举值级别
   */

  level?: number;

  /**
   * 助记码
   */
  mnemonic_code: string;

  /**
   * 系统参数
   */
  system_parameters: boolean;

  /**
   * 上级编码
   */
  parent_code: string;

  /**
   * 备注信息
   */
  remark: string;
}
