import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppManager } from 'src/app/shared/utils/helper';

@Component({
  selector: 'app-modal-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(public bsModalRef: BsModalRef) {}

  onHide() {
    AppManager.instance.removeBeforeUnload();
    this.bsModalRef.hide();
  }
}
