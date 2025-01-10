import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LookupCreateComponent } from '../lookup-create/lookup-create.component';
import { CustomRender } from 'src/app/shared/classes/custom-render';

@Component({
  selector: 'app-language',
  standalone: false,
  
  templateUrl: './language.component.html',
  styleUrl: './language.component.css'
})
export class LanguageComponent extends CustomRender implements OnDestroy {

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
  
  onCreate() {
    const initialState = {
      title: 'New Lookup Code'
    };
    this.bsModalRef = this.modalService.show(LookupCreateComponent, { 
      class: 'create-lookup-modal', 
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
      title: 'Edit Lookup Code'
    };
    this.bsModalRef = this.modalService.show(LookupCreateComponent, { 
      class: 'create-lookup-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhPopWindow_title', 
      initialState 
    });
    return false;
  }
}
