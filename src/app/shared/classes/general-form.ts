import { FormBuilder, FormArray, Validators, UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { marker as _ } from '@colsen1991/ngx-translate-extract-marker';

export class GeneralForm {
  
  protected mform?: UntypedFormGroup;

  constructor(protected translatex: TranslateService) {

  }

  get f() {
    return this.mform?.controls;
  }

  getValue(field: string) {
    return this.mform?.get(field)?.value;
  }

  setValue(field: string, val: any) {
    this.mform?.controls[field].patchValue(val);
  }

  invalid(s: string) {
    const m = this.mform?.controls[s];
    if (!m) {
      return false;
    }
    
    return m.invalid;
  }

  setCustomValidity(ev: any, s: string) {
    const t = this.translatex.instant(_(s));
    ev.target.setCustomValidity(t);
  }
}