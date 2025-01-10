import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-application-create',
  standalone: false,
  
  templateUrl: './application-create.component.html',
  styleUrl: './application-create.component.css'
})
export class ApplicationCreateComponent {

  title?: string;
  
  constructor(public bsModalRef: BsModalRef) {}
}
