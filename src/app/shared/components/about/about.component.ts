import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppManager } from 'src/app/shared/utils/helper';

@Component({
  selector: 'app-modal-about',
  standalone: false,
  
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  onClose!: Subject<any>;

  constructor(public bsModalRef: BsModalRef) {
    this.onClose = new Subject();
  }

  onContact() {
    this.onClose.next({ result: true });
    this.bsModalRef.hide();
  }

  onHide() {
    AppManager.instance.removeBeforeUnload();
    this.onClose.next({ result: false });
    this.bsModalRef.hide();
  }
}
