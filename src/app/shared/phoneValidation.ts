import { AbstractControl, ValidatorFn } from '@angular/forms';

const PHONE_REGEX = /^\d{10}$/;

export function phoneValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const valid = PHONE_REGEX.test(control.value);
      return valid ? null : { 'invalidPhone': { value: control.value } };
    };
  }