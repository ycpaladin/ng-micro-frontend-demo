import { ResponseData } from '@cy/lib/core';

export type ResponseLabelTemplateListData = ResponseData<LabelTemplateItem[]>;
export interface LabelTemplateItem {
  id: number;
  label_templates_files: LabelTemplatesFile[];
  updater: string;
  update_time: string;
  is_default: boolean;
  state: string;
  label_template: number;
}

export interface LabelTemplatesFile {
  id: number;
  file_info: FileInfo;
  file_name: string;
  file_md5: string;
  creator: string;
  create_time: string;
  label_template_detail: number;
}

export interface FileInfo {
  id: number;
  file_md5: string;
  file_size: string;
  file_type: string;
  file_path: string;
  creator: string;
  create_time: string;
}

export type ResponseCheckUniqueConfNameData = ResponseData<CheckUniqueConfName>;
export interface CheckUniqueConfName {
  is_duplicate: boolean;
}

export interface PrintMgmtData {
  id?: number;
  conf_name: string;
  function_name: string;
  print_content: string;
  printer_type: string;
  printer_IP: string;
  printer_port: string;
  remark: string;
  label_template_id: number;
  state: boolean;
}
