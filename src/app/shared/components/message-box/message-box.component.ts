import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-message-box',
  standalone: false,
  
  templateUrl: './message-box.component.html',
  styleUrl: './message-box.component.css'
})
export class MessageBoxComponent {

  title: string = '';
  code: string = '';
  desc: string = '';
  onClose!: Subject<any>;

  constructor(public bsModalRef: BsModalRef) {
    this.onClose = new Subject();
  }

  onHide() {
    this.onClose.next({ result: false });
    this.bsModalRef.hide();
  }

  static showModal(modalService: BsModalService, initialState: any) {
    const m = modalService.show(MessageBoxComponent, { 
      class: 'msg-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhMessageBox_title', 
      initialState 
    });
    return m;
  }
}
