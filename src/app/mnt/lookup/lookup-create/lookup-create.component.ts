import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GeneralForm } from 'src/app/shared/classes/general-form';

@Component({
  selector: 'app-modal-lookup-create',
  standalone: false,
  
  templateUrl: './lookup-create.component.html',
  styleUrl: './lookup-create.component.css'
})
export class LookupCreateComponent extends GeneralForm {

  title?: string;
    
  constructor(public bsModalRef: BsModalRef) {
    super();
  }
}
