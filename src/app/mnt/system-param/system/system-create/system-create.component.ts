import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GeneralForm } from 'src/app/shared/classes/general-form';
import { Helper } from 'src/app/shared/utils/helper';

@Component({
  selector: 'app-modal-system-create',
  standalone: false,
  
  templateUrl: './system-create.component.html',
  styleUrl: './system-create.component.css'
})
export class SystemCreateComponent extends GeneralForm {

  title?: string;
    
  constructor(
    public bsModalRef: BsModalRef,
    private fb: UntypedFormBuilder
  ) {
    super();
    this.createForm();
  }

  createForm() {
    this.mform = this.fb.group({
      description: [''],
      sel_param_value: [''],
      txt_param_value: ['', [Validators.required, Validators.maxLength(50)]],
      param_datatype: ['', [Validators.required]],
      param_data_ind: [''],
      param_length: ['', [Validators.maxLength(3)]],
      param_datamin: ['', [Validators.maxLength(5)]],
      param_datamax: ['', [Validators.maxLength(5)]]
    });
    this.mform?.get('param_data_ind')?.disable();
  }

  onSubmit() {

  }

  onKeyupParam(event: KeyboardEvent, field: string, ftype: number) {
    const v = this.getValue(field);
    const s = Helper.reject_space(v);
    const x = Helper.chkposval(s, ftype);
    this.setValue(field, x);
  }

  onBlurParam(event: FocusEvent, field: string, ftype: number) {
    const v = this.getValue(field);
    const s = Helper.reject_space(v);
    const x = Helper.chkposval(s, ftype);
    this.setValue(field, x);
  }

  onBlurParamLength(event: FocusEvent, field: string, ftype: number, param_datamin: HTMLInputElement, param_datamax: HTMLInputElement, txt_param_value: HTMLInputElement) {
    const v = this.getValue(field);
    const s = Helper.reject_space(v);
    const x = Helper.chkposval(s, ftype);
    this.setValue(field, x);
    this.chkLength(field, param_datamin, param_datamax, txt_param_value);
  }

  onHide() {
    this.bsModalRef.hide();
    return false;
  }

  private chkLength(field: string, param_datamin: HTMLInputElement, param_datamax: HTMLInputElement, txt_param_value: HTMLInputElement) {
    const vparam_length = this.getValue(field);
    const vparam_value = this.getValue('txt_param_value');
    const vtxt_length = vparam_value.length;

    const vmin_value = this.getValue('param_datamin');
    const vmin_length = vmin_value.length;
    const vmax_value = this.getValue('param_datamax');
    const vmax_length = vmax_value.length;

    if (vparam_length != '') {
      if (Number(vparam_length) < Number(vmin_length)) {
        this.setValue('param_datamin', '');
        param_datamin.focus();
      }

      if (Number(vparam_length) < Number(vmax_length)) {
        this.setValue('param_datamax', '');
        param_datamax.focus();
      }

      if (Number(vparam_length) < Number(vtxt_length)) {
        this.setValue('txt_param_value', '');
        txt_param_value.focus();
      }
    }
  }
}
