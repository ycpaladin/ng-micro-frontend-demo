import { ValidatorFn, AbstractControl } from '@angular/forms';

export function blankFieldValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    return value && value.trim() === '' ? { blank: { value: control.value } } : null;
  };
}
