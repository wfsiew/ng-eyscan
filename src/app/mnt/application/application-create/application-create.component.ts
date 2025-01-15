import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GeneralForm } from 'src/app/shared/classes/general-form';
import { MessageBoxComponent } from 'src/app/shared/components/message-box/message-box.component';
import { Helper } from 'src/app/shared/utils/helper';

@Component({
  selector: 'app-modal-application-create',
  standalone: false,
  
  templateUrl: './application-create.component.html',
  styleUrl: './application-create.component.css'
})
export class ApplicationCreateComponent extends GeneralForm {

  title?: string;
  bsModalRef1?: BsModalRef;
  disabled_secondary_id = true;
  readonly nameSpecialChars = Helper.nameSpecialChars;
  readonly descSpecialChars = Helper.descSpecialChars;
  
  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private fb: UntypedFormBuilder
  ) {
    super();
    this.createForm();
  }

  createForm() {
    this.mform = this.fb.group({
      description: ['', [Validators.required, Validators.maxLength(200)]],
      grading_id: ['P', [Validators.required]],
      report_ind: ['MC', [Validators.required]],
      parent_company_id: ['', [Validators.required]],
      secondary_id: [''],
      collect_company_id: [''],
      contact_name: ['', [Validators.maxLength(200)]],
      contact_email: ['', [Validators.maxLength(50)]],
      contact_no: ['', [Validators.maxLength(20)]],
      contact_address: ['', [Validators.maxLength(200)]],
      disease_cd_1: [''],
      disease_cd_2: [''],
      disease_cd_3: [''],
      disease_cd_4: ['']
    });
    this.mform?.get('secondary_id')?.disable();
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

  onChangeGradingId(x: HTMLSelectElement) {
    x.setCustomValidity('');
    const s = this.getValue('grading_id');
    if (s !== 'S') {
      this.mform?.get('secondary_id')?.disable();
      this.disabled_secondary_id = true;
      this.mform?.get('secondary_id')?.clearValidators();
    }
    
    else {
      this.mform?.get('secondary_id')?.enable();
      this.disabled_secondary_id = false;
      this.mform?.get('secondary_id')?.addValidators(Validators.required);
    }
  }

  onHide() {
    this.bsModalRef.hide();
    return false;
  }
}
