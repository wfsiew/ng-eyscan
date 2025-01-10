import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-system-create',
  standalone: false,
  
  templateUrl: './system-create.component.html',
  styleUrl: './system-create.component.css'
})
export class SystemCreateComponent {

  title?: string;
    
  constructor(public bsModalRef: BsModalRef) {}
}
