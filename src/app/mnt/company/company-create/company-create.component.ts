import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GeneralForm } from 'src/app/shared/classes/general-form';

@Component({
  selector: 'app-modal-company-create',
  standalone: false,
  
  templateUrl: './company-create.component.html',
  styleUrl: './company-create.component.css'
})
export class CompanyCreateComponent extends GeneralForm {

  title?: string;
  
  constructor(public bsModalRef: BsModalRef) {
    super();
  }
}
