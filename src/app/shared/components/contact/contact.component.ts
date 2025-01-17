import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppManager } from 'src/app/shared/utils/helper';
import { GeneralForm } from '../../classes/general-form';

@Component({
  selector: 'app-modal-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent extends GeneralForm {

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
      txtname: ['', [Validators.required]],
      txtemail: ['', [Validators.required]],
      txtorganization: ['', [Validators.required]],
      txtmessage: ['', [Validators.required, Validators.maxLength(2000)]]
    });
  }

  onSubmit() {

  }

  onHide() {
    AppManager.instance.removeBeforeUnload();
    this.bsModalRef.hide();
  }
}
