import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function confirmPasswordValidator(): ValidatorFn {

  return (control: AbstractControl) : ValidationErrors | null => {
    const pw1 = control.get('new_pwd')?.value;
    const pw2 = control.get('new_pwd_confirm')?.value;
    let ret = null;

    if (!pw2) {
      ret = { required: true };
      control.get('new_pwd_confirm')?.setErrors(ret);
      return ret;
    }

    if (pw1 !== pw2) {
      ret = { passwordNoMatch: true };
      control.get('new_pwd_confirm')?.setErrors(ret);
    }

    else {
      ret = null;
      control.get('new_pwd_confirm')?.setErrors(ret);
    }

    return ret;
  }
}