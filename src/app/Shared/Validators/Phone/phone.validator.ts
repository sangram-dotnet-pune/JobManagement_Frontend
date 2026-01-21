import { AbstractControl, ValidationErrors } from '@angular/forms';

export function CustomPhoneValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;         
  return value.includes(' ') ? { noSpace: true } : null; 
}
