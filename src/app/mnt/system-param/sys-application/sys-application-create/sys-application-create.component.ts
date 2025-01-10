import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-sys-application-create',
  standalone: false,
  
  templateUrl: './sys-application-create.component.html',
  styleUrl: './sys-application-create.component.css'
})
export class SysApplicationCreateComponent {

  title?: string;
    
  constructor(public bsModalRef: BsModalRef) {}
}
