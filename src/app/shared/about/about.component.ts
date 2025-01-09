import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-about',
  standalone: false,
  
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  public onClose!: Subject<any>;

  constructor(public bsModalRef: BsModalRef) {
    this.onClose = new Subject();
  }

  onContact() {
    this.onClose.next({ result: true });
    this.bsModalRef.hide();
  }

  onHide() {
    this.onClose.next({ result: false });
    this.bsModalRef.hide();
  }
}
