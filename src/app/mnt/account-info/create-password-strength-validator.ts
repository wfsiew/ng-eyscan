import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createPasswordStrengthValidator(vpwdmin: number, vpwdmax: number): ValidatorFn {
  
  return (control: AbstractControl) : ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }

    // const vpwdmin = 8;
    // const vpwdmax = 20;

    const vnew_pwd = value;
    let vvalidation_cnt = 0;
    const vpattern_number = /\d/g;
		const vpattern_utxt = /[A-Z]/g;
		const vpattern_ltxt = /[a-z]/g;
		const vpattern_nontxtno = /^[a-zA-Z0-9-]*$/;
		const vpattern_sp = /[!@#$%^&*()_+\-=]*$/;

    const vresult_number = vnew_pwd.match(vpattern_number);
		const vresult_utxt = vnew_pwd.match(vpattern_utxt);
		const vresult_ltxt = vnew_pwd.match(vpattern_ltxt);
		const vresult_nontxtno = vnew_pwd.match(vpattern_nontxtno);
		const vresult_sp = vnew_pwd.match(vpattern_sp);

    if ((vnew_pwd.length >= vpwdmin) && (vnew_pwd.length <= vpwdmax)) {
      vvalidation_cnt++;
    }

    else {
      
    }

    if (!vresult_ltxt) {
      
    }

    else {
      if (vresult_ltxt.length > 0) {
        vvalidation_cnt++;
      }

      else {
        
      }
    }

    if (!vresult_utxt) {
      
    }

    else {
      if (vresult_utxt.length > 0) {
        vvalidation_cnt++;
      }

      else {

      }
    }

    if (!vresult_number) {
      
    }

    else {
      if (vresult_number.length > 0) {
        vvalidation_cnt++;
      }

      else {
        
      }
    }

    if (!vresult_nontxtno) {
      if (!vresult_sp) {
        
      }

      else {
        if (vresult_sp.length > 0) {
          vvalidation_cnt++;
        }

        else {

        }
      }
    }

    else {

    }

    let ret = null;

    if (vvalidation_cnt < 5) {
      ret = { passwordStrength: true };
      control.get('new_pwd')?.setErrors(ret);
    }

    else {
      ret = null;
      control.get('new_pwd')?.setErrors(ret);
    }

    return ret;
  }
}