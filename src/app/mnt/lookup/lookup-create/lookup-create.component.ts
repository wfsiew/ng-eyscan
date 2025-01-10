import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lookup-create',
  standalone: false,
  
  templateUrl: './lookup-create.component.html',
  styleUrl: './lookup-create.component.css'
})
export class LookupCreateComponent {

  title?: string;
    
  constructor(public bsModalRef: BsModalRef) {}
}
