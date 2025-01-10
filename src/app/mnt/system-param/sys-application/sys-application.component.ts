import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SysApplicationCreateComponent } from './sys-application-create/sys-application-create.component';
import { SystemCreateComponent } from '../system/system-create/system-create.component';

@Component({
  selector: 'app-sys-application',
  standalone: false,
  
  templateUrl: './sys-application.component.html',
  styleUrl: './sys-application.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SysApplicationComponent {

  bsModalRef?: BsModalRef;
  
  constructor(
    private router: Router,
    private modalService: BsModalService
  ) {
    
  }

  onCreate(ev: any) {
    ev.stopPropagation();
    const initialState = {
      title: 'Customize Parameter for Organization'
    };
    this.bsModalRef = this.modalService.show(SysApplicationCreateComponent, { 
      class: 'create-company-parameter-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhPopWindow_title', 
      initialState 
    });
    // this.bsModalRef.content.onClose.subscribe((res: any) => {
    //   if (res.result === true) {
    //     this.onContact();
    //   }
    // });
    return false;
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
