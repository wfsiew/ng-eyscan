import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { MessageBoxComponent } from 'src/app/shared/components/message-box/message-box.component';
import { CustomRender } from 'src/app/shared/classes/custom-render';
import { Helper } from 'src/app/shared/utils/helper';

@Component({
  selector: 'app-company',
  standalone: false,
  
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent extends CustomRender implements OnDestroy {

  mform?: UntypedFormGroup;
  bsModalRef?: BsModalRef;

  constructor(
    protected router: Router,
    protected renderer2: Renderer2,
    private modalService: BsModalService,
    private fb: UntypedFormBuilder
  ) {
    super(router, renderer2);
    this.createForm();
  }

  ngOnDestroy() {
    super.destroy();
  }

  createForm() {
    this.mform = this.fb.group({
      desc: ['']
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
    this.bsModalRef = this.modalService.show(MessageBoxComponent, { 
      class: 'msg-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhMessageBox_title', 
      initialState 
    });
  }

  onCreate() {
    const initialState = {
      title: 'New Organization'
    };
    this.bsModalRef = this.modalService.show(CompanyCreateComponent, { 
      class: 'create-company-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhPopWindow_title', 
      initialState 
    });
    // this.bsModalRef.content.onClose.subscribe((res: any) => {
    //   if (res.result === true) {
    //     this.onContact();
    //   }
    // });
  }

  onEdit() {
    const initialState = {
      title: 'Edit Organization'
    };
    this.bsModalRef = this.modalService.show(CompanyCreateComponent, { 
      class: 'create-company-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhPopWindow_title', 
      initialState 
    });
    return false;
  }

  onKeyupDesc(event: KeyboardEvent) {
    const f = this.mform?.value;
    const v = f.desc;
    const ls = Helper.validateSpecialCharacters(v, Helper.descSpecialChars, 'Y', 'Y');
    this.mform?.controls['desc'].patchValue(ls[0]);
    if (ls[1] === false) {
      this.showInvalidInput(ls[2] as string);
    }
  }
}
