import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { Helper } from 'src/app/shared/utils/helper';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() reload: string = '';
  @Input() menu: string = '';
  @Input() headerid: string = '';
  @Input() title: string = '';
  bsModalRef?: BsModalRef;

  constructor(
    private router: Router,
    private modalService: BsModalService
  ) {

  }

  onAbout() {
    const initialState = {
    
    };
    this.bsModalRef = this.modalService.show(AboutComponent, { 
      class: 'about-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhAboutBox_title', 
      initialState 
    });
    this.bsModalRef.content.onClose.subscribe((res: any) => {
      if (res.result === true) {
        this.onContact();
      }
    });
    return false;
  }

  onContact() {
    const initialState = {
    
    };
    this.bsModalRef = this.modalService.show(ContactComponent, { 
      class: 'contact-modal', 
      backdrop: 'static', 
      ariaLabelledBy: '__nhPopWindow_title', 
      initialState 
    });
  }

  goto(s: string) {
    Helper.removeBeforeunload();
    this.router.navigate([s]);
    if (this.reload === s) {
      location.href = location.href;
    }

    return false;
  }
}
