import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { GuideComponent } from './guide/guide.component';
import { AcquireImageComponent } from './acquire-image/acquire-image.component';

@Component({
  selector: 'app-submit-image',
  standalone: false,
  
  templateUrl: './submit-image.component.html',
  styleUrl: './submit-image.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SubmitImageComponent implements OnInit {

  date_of_image: any = null;
  bsModalRef?: BsModalRef;

  constructor(
    private router: Router,
    private modalService: BsModalService
  ) {
    
  }

  ngOnInit() {

  }

  onModalAcquireImage() {
    const initialState = {
      list: []
    };
    this.bsModalRef = this.modalService.show(AcquireImageComponent, { 
      class: 'acquire-image-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhPopWindow_title', 
      initialState 
    });
    this.bsModalRef.content.onClose.subscribe((res: any) => {
      if (res.result === true) {
        const s = res.list.join(',');
        
      }
    });
  }

  onReset() {
    location.href = location.href;
  }

  onModalGuide() {
    const initialState = {

    };
    this.bsModalRef = this.modalService.show(GuideComponent, { 
      class: 'guide-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhPopWindow_title', 
      initialState 
    });
  }

  onAccInfo() {
    this.router.navigate(['/mnt/user']);
    return false;
  }

  onHome() {
    this.router.navigate(['/home']);
    return false;
  }

  onSubmitImage() {
    this.router.navigate(['/submit-image']);
    location.href = location.href;
    return false;
  }

  onPrimary() {
    this.router.navigate(['/primary']);
    return false;
  }

  onReportsMgmt() {
    this.router.navigate(['/reports/mgmt']);
    return false;
  }
}
