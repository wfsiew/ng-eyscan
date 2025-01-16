import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AccountsCreateComponent } from '../accounts-create/accounts-create.component';
import { CustomRender } from 'src/app/shared/classes/custom-render';
import { TranslateService } from '@ngx-translate/core';
import { AppTranslateService } from 'src/app/services/app-translate.service';

@Component({
  selector: 'app-primary-secondary-user',
  standalone: false,
  
  templateUrl: './primary-secondary-user.component.html',
  styleUrl: './primary-secondary-user.component.css'
})
export class PrimarySecondaryUserComponent extends CustomRender implements OnDestroy {

  bsModalRef?: BsModalRef;

  constructor(
    protected router: Router,
    protected renderer2: Renderer2,
    protected translate: TranslateService,
    protected appTranslate: AppTranslateService,
    private modalService: BsModalService
  ) {
    super(router, renderer2, translate, appTranslate);
  }

  ngOnDestroy() {
    super.destroy();
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
}
