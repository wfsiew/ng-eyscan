import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SystemCreateComponent } from './system-create/system-create.component';

@Component({
  selector: 'app-system',
  standalone: false,
  
  templateUrl: './system.component.html',
  styleUrl: './system.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SystemComponent {

  bsModalRef?: BsModalRef;
  
  constructor(
    private router: Router,
    private modalService: BsModalService
  ) {
    
  }

  onCreate() {
    const initialState = {
      title: 'New Parameter'
    };
    this.bsModalRef = this.modalService.show(SystemCreateComponent, { 
      class: 'create-parameter-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhPopWindow_title', 
      initialState 
    });
    // this.bsModalRef.content.onClose.subscribe((res: any) => {
    //   if (res.result === true) {
    //     this.onContact();
    //   }
    // });
  }

  onEdit() {
    const initialState = {
      title: 'Edit Parameter'
    };
    this.bsModalRef = this.modalService.show(SystemCreateComponent, { 
      class: 'create-parameter-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhPopWindow_title', 
      initialState 
    });
    return false;
  }

  goto(s: string, reload = false) {
    this.router.navigate([s]);
    if (reload) {
      location.href = location.href;
    }

    return false;
  }
}
