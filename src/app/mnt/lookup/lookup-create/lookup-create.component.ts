import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GeneralForm } from 'src/app/shared/classes/general-form';

@Component({
  selector: 'app-modal-lookup-create',
  standalone: false,
  
  templateUrl: './lookup-create.component.html',
  styleUrl: './lookup-create.component.css'
})
export class LookupCreateComponent extends GeneralForm {

  title: string = '';
    
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
      code: ['', [Validators.required, Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      english_desc: ['', [Validators.required, Validators.maxLength(200)]],
      sort_seq: ['', [Validators.required, Validators.maxLength(5)]],
      status: [true]
    });
  }

  onSubmit() {

  }
}
