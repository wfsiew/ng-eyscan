import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormArray, Validators, UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CustomRender } from 'src/app/shared/classes/custom-render';
import { TranslateService } from '@ngx-translate/core';
import { AppTranslateService } from 'src/app/services/app-translate.service';
import { MessageBoxComponent } from 'src/app/shared/components/message-box/message-box.component';
import { Helper } from 'src/app/shared/utils/helper';
import { marker as _ } from '@colsen1991/ngx-translate-extract-marker';

@Component({
  selector: 'app-account-info',
  standalone: false,
  
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.css'
})
export class AccountInfoComponent extends CustomRender implements OnDestroy {

  mform?: UntypedFormGroup;
  pform?: UntypedFormGroup;
  disableChangePwd = true;
  bsModalRef1?: BsModalRef;
  readonly nameSpecialChars = Helper.nameSpecialChars;
  readonly vpwdmin = 8;
  readonly vpwdmax = 20;

  ver1 = false;
  ver2 = false;
  ver3 = false;
  ver4 = false;
  ver5 = false;

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

  onSubmitChangePwd() {
    const vnew_pwd: string = this.getPValue('new_pwd');
    const vold_pwd: string = this.getPValue('old_pwd');
    const vnew_pwd_confirm: string = this.getPValue('new_pwd_confirm');
    if (vold_pwd === '') {
      const field = this.translate.instant(_('Current Password')).toUpperCase();
      const md = this.translate.instant(_('{{field}} IS MANDATORY.'), {field:field});
      this.showPasswordError('SYS-00002', md);
    }

    else if (vnew_pwd_confirm === '') {
      const field = this.translate.instant(_('Re-enter New Password')).toUpperCase();
      const md = this.translate.instant(_('{{field}} IS MANDATORY.'), {field:field});
      this.showPasswordError('SYS-00002', md);
    }

    else if (vnew_pwd !== vnew_pwd_confirm) {
      const md = this.translate.instant(_('New password and confirm password should be same.'));
      this.showPasswordError('SYS-00016', md);
    }
  }

  showPasswordError(c: string, m: string) {
    const initialState = {
      title: 'Error',
      code: c,
      desc: m
    };
    this.bsModalRef1 = this.modalService.show(MessageBoxComponent, { 
      class: 'msg-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhMessageBox_title', 
      initialState 
    });
  }

  showInvalidInput(r: string) {
    const initialState = {
      title: 'Information',
      code: 'SYS-00030',
      desc: this.translate.instant(_('Following characters<br> {{ch}} <br>are not allowed in this field and will be removed.'), {ch:r})
      // message: 
      // `
      // :<br>Following characters<br> ${r} <br>are not allowed in this field and will be removed.
      // `
    };
    this.bsModalRef1 = this.modalService.show(MessageBoxComponent, { 
      class: 'msg-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhMessageBox_title', 
      initialState 
    });
  }

  onKeyupNewPwd(ev: KeyboardEvent) {
    const vnew_pwd: string = this.getPValue('new_pwd');
    //-- total = 5; all password requirements must be met in order to save
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

    if ((vnew_pwd.length >= this.vpwdmin) && (vnew_pwd.length <= this.vpwdmax)) {
      this.ver5 = true;
      vvalidation_cnt++;
    }

    else {
      this.ver5 = false;
    }

    if (!vresult_ltxt) {
      this.ver1 = false;
    }

    else {
      if (vresult_ltxt.length > 0) {
        this.ver1 = true;
        vvalidation_cnt++;
      }

      else {
        this.ver1 = false;
      }
    }

    if (!vresult_utxt) {
      this.ver2 = false;
    }

    else {
      if (vresult_utxt.length > 0) {
        this.ver2 = true;
        vvalidation_cnt++;
      }

      else {
        this.ver2 = false;
      }
    }

    if (!vresult_number) {
      this.ver3 = false;
    }

    else {
      if (vresult_number.length > 0) {
        this.ver3 = true;
        vvalidation_cnt++;
      }

      else {
        this.ver3 = false;
      }
    }

    if (!vresult_nontxtno) {
      if (!vresult_sp) {
        this.ver4 = false;
      }

      else {
        if (vresult_sp.length > 0) {
          this.ver4 = true;
          vvalidation_cnt++;
        }

        else {
          this.ver4 = false;
        }
      }
    }

    else {
      this.ver4 = false;
    }

    if (vvalidation_cnt < 5) {
      this.disableChangePwd = true;
    }

    else {
      this.disableChangePwd = false;
    }
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

  getPValue(field: string) {
    return this.pform?.get(field)?.value;
  }
}
