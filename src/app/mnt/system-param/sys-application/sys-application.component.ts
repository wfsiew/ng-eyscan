import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SysApplicationCreateComponent } from './sys-application-create/sys-application-create.component';
import { SystemCreateComponent } from '../system/system-create/system-create.component';
import { CustomRender } from 'src/app/shared/classes/custom-render';

@Component({
  selector: 'app-sys-application',
  standalone: false,
  
  templateUrl: './sys-application.component.html',
  styleUrl: './sys-application.component.css'
})
export class SysApplicationComponent extends CustomRender implements OnDestroy {

  bsModalRef?: BsModalRef;
  
  constructor(
    protected router: Router,
    protected renderer2: Renderer2,
    private modalService: BsModalService
  ) {
    super(router, renderer2);
  }

  ngOnDestroy() {
    super.destroy();
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

  onEdit(ev: any) {
    ev.stopPropagation();
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
}
