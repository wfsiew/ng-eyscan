import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal-content',
  standalone: false,
  
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.css'
})
export class GuideComponent {

  activeSlideIndex = 0;

  constructor(public bsModalRef: BsModalRef) {}
}
