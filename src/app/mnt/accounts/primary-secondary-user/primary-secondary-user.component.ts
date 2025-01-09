import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AccountsCreateComponent } from '../accounts-create/accounts-create.component';

@Component({
  selector: 'app-primary-secondary-user',
  standalone: false,
  
  templateUrl: './primary-secondary-user.component.html',
  styleUrl: './primary-secondary-user.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PrimarySecondaryUserComponent {

  bsModalRef?: BsModalRef;

  constructor(
    private router: Router,
    private modalService: BsModalService
  ) {
    
  }

  onCreate() {
    const initialState = {
      title: 'New User Account'
    };
    this.bsModalRef = this.modalService.show(AccountsCreateComponent, { 
      class: 'create-accounts-modal', 
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
      title: 'Edit User Account'
    };
    this.bsModalRef = this.modalService.show(AccountsCreateComponent, { 
      class: 'create-accounts-modal', 
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
