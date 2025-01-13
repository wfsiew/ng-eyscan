import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GeneralForm } from 'src/app/shared/classes/general-form';

@Component({
  selector: 'app-modal-system-create',
  standalone: false,
  
  templateUrl: './system-create.component.html',
  styleUrl: './system-create.component.css'
})
export class SystemCreateComponent extends GeneralForm {

  title?: string;
    
  constructor(public bsModalRef: BsModalRef) {
    super();
  }
}
