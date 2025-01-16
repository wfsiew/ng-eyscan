import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GeneralForm } from 'src/app/shared/classes/general-form';
import { MessageBoxComponent } from 'src/app/shared/components/message-box/message-box.component';
import { Helper } from 'src/app/shared/utils/helper';

@Component({
  selector: 'app-modal-accounts-create',
  standalone: false,
  
  templateUrl: './accounts-create.component.html',
  styleUrl: './accounts-create.component.css'
})
export class AccountsCreateComponent extends GeneralForm {

  title: string = ''
  bsModalRef1?: BsModalRef;
  
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
      email: ['', [Validators.required, Validators.maxLength(50)]],
      display_name: ['', [Validators.maxLength(20)]],
      contact_no: ['', [Validators.maxLength(20)]],
      first_name: ['', [Validators.required, Validators.maxLength(100)]],
      last_name: ['', [Validators.required, Validators.maxLength(100)]],
      company_id: ['', [Validators.required]],
      user_group: ['1', [Validators.required]],
      credits_management_ind: [true],
      timezone_name: ['', [Validators.required]],
      user_status: ['A', [Validators.required]],
      inactive_date: ['', [Validators.maxLength(11)]]
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

  onKeyupValidateSpecialChar(event: KeyboardEvent, field: string) {
    const f = this.mform?.value;
    const v = f[field];
    const ls = Helper.validateSpecialCharacters(v, Helper.nameSpecialChars, 'Y', 'Y');
    this.mform?.controls[field].patchValue(ls[0]);
    if (ls[1] === false) {
      this.showInvalidInput(ls[2] as string);
    }
  }

  onKeyupContact(event: KeyboardEvent) {
    const f = this.mform?.value;
    const v = f.contact_no;
    const s = Helper.chkphoneval(v);
    this.mform?.patchValue({ contact_no: s });
  }

  onKeyupInactiveDate(event: KeyboardEvent) {
    const key = event.key;
    if (key === 'Backspace') {
      this.mform?.patchValue({ inactive_date: '' });
    }
  }

  onHide() {
    this.bsModalRef.hide();
    return false;
  }
}
