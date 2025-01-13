import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GeneralForm } from 'src/app/shared/classes/general-form';

@Component({
  selector: 'app-modal-sys-application-create',
  standalone: false,
  
  templateUrl: './sys-application-create.component.html',
  styleUrl: './sys-application-create.component.css'
})
export class SysApplicationCreateComponent extends GeneralForm {

  title?: string;
    
  constructor(public bsModalRef: BsModalRef) {
    super();
  }
}
