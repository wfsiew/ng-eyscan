import { Component } from '@angular/core';
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
  
  constructor(public bsModalRef: BsModalRef) {
    super();
  }
}
