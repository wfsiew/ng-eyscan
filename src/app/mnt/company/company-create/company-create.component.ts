import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-company-create',
  standalone: false,
  
  templateUrl: './company-create.component.html',
  styleUrl: './company-create.component.css'
})
export class CompanyCreateComponent {

  title?: string;
  
  constructor(public bsModalRef: BsModalRef) {}
}
