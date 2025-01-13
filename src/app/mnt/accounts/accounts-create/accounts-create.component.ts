import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GeneralForm } from 'src/app/shared/classes/general-form';

@Component({
  selector: 'app-modal-accounts-create',
  standalone: false,
  
  templateUrl: './accounts-create.component.html',
  styleUrl: './accounts-create.component.css'
})
export class AccountsCreateComponent extends GeneralForm {

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

  onKeyupInactiveDate(event: KeyboardEvent) {
    const key = event.key;
    if (key === 'Backspace') {
      this.mform?.patchValue({ inactive_date: '' });
    }
  }
}
