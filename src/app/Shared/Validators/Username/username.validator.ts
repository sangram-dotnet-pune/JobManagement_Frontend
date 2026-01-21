import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noSpaceValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;         
  return value.includes(' ') ? { noSpace: true } : null; 
}


export function noSpecialCharValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;         
  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/g;
  return specialCharPattern.test(value) ? { noSpecialChar: true } : null; 
}