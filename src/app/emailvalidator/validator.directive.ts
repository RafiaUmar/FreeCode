import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidatorDirective,
      multi: true
    }
  ]
})
export class ValidatorDirective implements Validator {



  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null  {
    const value = control.value as string;
    if (value.includes('test')) {
      return {
        invalidEmail: true,
      };
    };
    return null
    
  }
}
