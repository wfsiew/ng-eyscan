import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LookupCreateComponent } from '../lookup-create/lookup-create.component';

@Component({
  selector: 'app-language',
  standalone: false,
  
  templateUrl: './language.component.html',
  styleUrl: './language.component.css'
})
export class LanguageComponent implements OnDestroy {

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

  goto(s: string, reload = false) {
    this.router.navigate([s]);
    if (reload) {
      location.href = location.href;
    }

    return false;
  }
}
