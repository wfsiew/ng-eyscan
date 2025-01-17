import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormArray, Validators, UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CustomRender } from 'src/app/shared/classes/custom-render';
import { TranslateService } from '@ngx-translate/core';
import { AppTranslateService } from 'src/app/services/app-translate.service';
import { MessageBoxComponent } from 'src/app/shared/components/message-box/message-box.component';
import { Helper } from 'src/app/shared/utils/helper';

@Component({
  selector: 'app-account-info',
  standalone: false,
  
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.css'
})
export class AccountInfoComponent extends CustomRender implements OnDestroy {

  mform?: UntypedFormGroup;
  pform?: UntypedFormGroup;
  bsModalRef1?: BsModalRef;
  readonly nameSpecialChars = Helper.nameSpecialChars;

  constructor(
    protected router: Router,
    protected renderer2: Renderer2,
    protected translate: TranslateService,
    protected appTranslate: AppTranslateService,
    private modalService: BsModalService,
    private fb: UntypedFormBuilder
  ) {
    super(router, renderer2, translate, appTranslate);
    this.createForm();
  }

  ngOnDestroy() {
    super.destroy();
  }

  createForm() {
    this.mform = this.fb.group({
      displayname: ['', [Validators.maxLength(20)]],
      firstname: ['', [Validators.maxLength(100)]],
      lastname: ['', [Validators.maxLength(100)]],
      contactno: ['', [Validators.maxLength(20)]],
      grading_group: [''],
      company: [''],
      timezone: ['']
    });
    this.pform = this.fb.group({
      old_pwd: [''],
      new_pwd: [''],
      new_pwd_confirm: ['']
    });
  }

  onSubmit() {

  }

  onSubmitp() {

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

  getValue(field: string) {
    return this.mform?.get(field)?.value;
  }

  setValue(field: string, val: any) {
    this.mform?.controls[field].patchValue(val);
  }
}
