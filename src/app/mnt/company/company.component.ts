import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CompanyCreateComponent } from './company-create/company-create.component';

@Component({
  selector: 'app-company',
  standalone: false,
  
  templateUrl: './company.component.html',
  styleUrl: './company.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CompanyComponent {

  bsModalRef?: BsModalRef;

  constructor(
    private router: Router,
    private modalService: BsModalService
  ) {
    
  }

  onCreate() {
    const initialState = {
      title: 'New Organization'
    };
    this.bsModalRef = this.modalService.show(CompanyCreateComponent, { 
      class: 'create-company-modal', 
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
      title: 'Edit Organization'
    };
    this.bsModalRef = this.modalService.show(CompanyCreateComponent, { 
      class: 'create-company-modal', 
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
