import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-accounts-create',
  standalone: false,
  
  templateUrl: './accounts-create.component.html',
  styleUrl: './accounts-create.component.css'
})
export class AccountsCreateComponent {

  title?: string;
  
  constructor(public bsModalRef: BsModalRef) {}
}
