import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-error-box',
  standalone: false,
  
  templateUrl: './error-box.component.html',
  styleUrl: './error-box.component.css'
})
export class ErrorBoxComponent {

  err: string = '';

  constructor(public bsModalRef: BsModalRef) {
    
  }
}
