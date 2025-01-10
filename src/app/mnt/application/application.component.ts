import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApplicationCreateComponent } from './application-create/application-create.component';

@Component({
  selector: 'app-application',
  standalone: false,
  
  templateUrl: './application.component.html',
  styleUrl: './application.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ApplicationComponent {

  bsModalRef?: BsModalRef;

  constructor(
    private router: Router,
    private modalService: BsModalService
  ) {
    
  }

  onCreate() {
    const initialState = {
      title: 'New Application'
    };
    this.bsModalRef = this.modalService.show(ApplicationCreateComponent, { 
      class: 'create-application-modal', 
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
      title: 'Edit Application'
    };
    this.bsModalRef = this.modalService.show(ApplicationCreateComponent, { 
      class: 'create-application-modal', 
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
