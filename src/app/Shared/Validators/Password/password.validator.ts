import { AbstractControl, ValidationErrors } from '@angular/forms';


export function CustomPassword(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;         
const hasCapitalLetter = /[A-Z]/.test(value);
const hasSmallLetter = /[a-z]/.test(value);
const hasNumber = /[0-9]/.test(value);
const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);

if (!hasCapitalLetter || !hasSmallLetter || !hasNumber || !hasSpecialChar) {
    return {
        passwordStrength: {
            capitalLetter: !hasCapitalLetter,
            smallLetter: !hasSmallLetter,
            number: !hasNumber,
            specialChar: !hasSpecialChar
        }
    };
}

return null;
}