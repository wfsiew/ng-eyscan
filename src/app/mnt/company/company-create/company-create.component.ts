import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GeneralForm } from 'src/app/shared/classes/general-form';
import { MessageBoxComponent } from 'src/app/shared/components/message-box/message-box.component';
import { Helper } from 'src/app/shared/utils/helper';

@Component({
  selector: 'app-modal-company-create',
  standalone: false,
  
  templateUrl: './company-create.component.html',
  styleUrl: './company-create.component.css'
})
export class CompanyCreateComponent extends GeneralForm {

  title?: string;
  bsModalRef1?: BsModalRef;
  readonly nameSpecialChars = Helper.nameSpecialChars;
  readonly descSpecialChars = Helper.descSpecialChars;
  
  constructor(
    public bsModalRef: BsModalRef,
    protected translate: TranslateService,
    private modalService: BsModalService,
    private fb: UntypedFormBuilder
  ) {
    super(translate);
    this.createForm();
  }

  createForm() {
    this.mform = this.fb.group({
      description: ['', [Validators.required, Validators.maxLength(200)]],
      grading_id: ['P', [Validators.required]],
      report_ind: ['MC', [Validators.required]],
      auditing_threshold: ['', [Validators.maxLength(4)]],
      parent_company_id: [''],
      camera_id: ['', [Validators.maxLength(50)]],
      secondary_id: [''],
      collect_company_id: [''],
      contact_name: ['', [Validators.maxLength(200)]],
      contact_email: ['', [Validators.maxLength(50)]],
      contact_no: ['', [Validators.maxLength(20)]],
      contact_address: ['', [Validators.maxLength(200)]],
      status: ['A'],
      disease_cd_1: [''],
      disease_cd_2: [''],
      disease_cd_3: [''],
      disease_cd_4: [''],
      trial_ind: ['Y'],
      trial_startdate: ['', [Validators.required, Validators.maxLength(11)]],
      trial_enddate: ['', [Validators.maxLength(11)]],
      trial_count: ['0', [Validators.maxLength(4)]],
      submitted_count: ['0', [Validators.maxLength(4)]],
      subscribe_startdate: ['', [Validators.maxLength(11)]],
      subscribe_enddate: ['', [Validators.maxLength(11)]],
      billing_mode: [''],
      selena_threshold: ['', [Validators.maxLength(100)]],
      ckd_image_left_threshold: ['', [Validators.maxLength(100)]],
      ckd_image_right_threshold: ['', [Validators.maxLength(100)]]
    });
  }

  onSubmit() {

  }

  showInvalidInput(r: string) {
    const initialState = {
      title: 'Information',
      message: 
      `
      SYS-00030:<br>Following characters<br> ${r} <br>are not allowed in this field and will be removed.
      `
    };
    this.bsModalRef1 = this.modalService.show(MessageBoxComponent, { 
      class: 'msg-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhMessageBox_title', 
      initialState 
    });
  }

  onKeyupCkdIm(event: KeyboardEvent, field: string, ftype: number) {
    const v = this.getValue(field);
    const s = Helper.reject_space(v);
    const x = Helper.chkposval(s, ftype);
    this.setValue(field, x);
  }

  onBlurCkdIm(event: FocusEvent, field: string, ftype: number) {
    const v = this.getValue(field);
    const s = Helper.reject_space(v);
    const x = Helper.chkposval(s, ftype);
    this.setValue(field, x);
  }

  onKeyupValidateSpecialChar(event: KeyboardEvent, specialChars: string, field: string) {
    const v = this.getValue(field);
    const ls = Helper.validateSpecialCharacters(v, specialChars, 'Y', 'Y');
    this.setValue(field, ls[0]);
    if (ls[1] === false) {
      this.showInvalidInput(ls[2] as string);
    }
  }

  onKeyupChkposval(event: KeyboardEvent, field: string, ftype: number) {
    const v = this.getValue(field);
    const s = Helper.chkposval(v, ftype);
    this.setValue(field, s);
  }

  onKeyupDate(event: KeyboardEvent, field: string) {
    const key = event.key;
    if (key === 'Backspace') {
      this.setValue(field, '');
    }
  }

  onDateChange(val: Date, x: HTMLInputElement) {
    if (!val) {
      x.setCustomValidity('Please fill out this field.');
    }

    else {
      x.setCustomValidity('');
    }
  }

  onHide() {
    this.bsModalRef.hide();
    return false;
  }
}
