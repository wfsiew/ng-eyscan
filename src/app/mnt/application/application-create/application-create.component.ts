import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GeneralForm } from 'src/app/shared/classes/general-form';

@Component({
  selector: 'app-modal-application-create',
  standalone: false,
  
  templateUrl: './application-create.component.html',
  styleUrl: './application-create.component.css'
})
export class ApplicationCreateComponent extends GeneralForm {

  title?: string;
  
  constructor(public bsModalRef: BsModalRef) {
    super();
  }
}
