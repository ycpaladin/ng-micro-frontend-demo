import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanShowOpen'
})
export class BooleanShowOpenPipe implements PipeTransform {
  transform(value: boolean | string): string {
    if (typeof (value) === 'boolean') {
      if (value) {
        return '是';
      } else {
        return '否';
      }
    } else {
      if (value === 'true') {
        return '是';
      } else if (value === 'false') {
        return '否';
      }
    }
  }

}
