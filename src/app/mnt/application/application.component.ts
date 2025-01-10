import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApplicationCreateComponent } from './application-create/application-create.component';
import { CustomRender } from 'src/app/shared/custom-render';

@Component({
  selector: 'app-application',
  standalone: false,
  
  templateUrl: './application.component.html',
  styleUrl: './application.component.css'
})
export class ApplicationComponent extends CustomRender implements OnDestroy {

  bsModalRef?: BsModalRef;

  constructor(
    private router: Router,
    protected renderer2: Renderer2,
    private modalService: BsModalService
  ) {
    super(renderer2);
  }

  ngOnDestroy() {
    super.destroy();
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
