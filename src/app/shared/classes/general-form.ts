import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms'

export class GeneralForm {
  
  protected mform?: FormGroup;

  get f() {
    return this.mform?.controls;
  }

  invalid(s: string) {
    const m = this.mform?.controls[s];
    if (!m) {
      return false;
    }
    
    return m.invalid && (m.dirty || m.touched);
  }
}