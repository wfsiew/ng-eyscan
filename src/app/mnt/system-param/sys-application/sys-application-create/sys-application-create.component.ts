import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GeneralForm } from 'src/app/shared/classes/general-form';

@Component({
  selector: 'app-modal-sys-application-create',
  standalone: false,
  
  templateUrl: './sys-application-create.component.html',
  styleUrl: './sys-application-create.component.css'
})
export class SysApplicationCreateComponent extends GeneralForm {

  title?: string;

  constructor(
    public bsModalRef: BsModalRef,
    protected translate: TranslateService,
    private fb: UntypedFormBuilder
  ) {
    super(translate);
    this.createForm();
  }

  createForm() {
    this.mform = this.fb.group({
      description: [''],
      chk_item_all: [''],
      chk_item_1: [''],
      param_value_1: [''],
      chk_item_2: [''],
      param_value_2: [''],
      chk_item_3: [''],
      param_value_3: [''],
      chk_item_4: [''],
      param_value_4: [''],
      chk_item_5: [''],
      param_value_5: [''],
      chk_item_6: [''],
      param_value_6: [''],
      chk_item_7: [''],
      param_value_7: [''],
      chk_item_8: [''],
      param_value_8: [''],
      chk_item_9: [''],
      param_value_9: [''],
      chk_item_10: [''],
      param_value_10: [''],
      chk_item_11: [''],
      param_value_11: [''],
      chk_item_12: [''],
      param_value_12: [''],
      chk_item_13: [''],
      param_value_13: [''],
      chk_item_14: [''],
      param_value_14: [''],
      chk_item_15: [''],
      param_value_15: [''],
      chk_item_16: [''],
      param_value_16: ['']
    });
  }

  onSubmit() {

  }

  onHide() {
    this.bsModalRef.hide();
    return false;
  }
}
