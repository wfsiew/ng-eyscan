import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AccountsCreateComponent } from '../accounts-create/accounts-create.component';

@Component({
  selector: 'app-secondary-graders',
  standalone: false,
  
  templateUrl: './secondary-graders.component.html',
  styleUrl: './secondary-graders.component.css'
})
export class SecondaryGradersComponent implements OnDestroy {

  bsModalRef?: BsModalRef;

  constructor(
    private router: Router,
    private renderer2: Renderer2,
    private modalService: BsModalService
  ) {
    this.renderer2.addClass(document.body, 'main-body');
  }

  ngOnDestroy() {
    this.renderer2.removeClass(document.body, 'main-body');
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
