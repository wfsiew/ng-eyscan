import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppTranslateService } from 'src/app/services/app-translate.service';

@Component({
  selector: 'app-modal-guide',
  standalone: false,
  
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.css'
})
export class GuideComponent {

  activeSlideIndex = 0;

  constructor(
    public bsModalRef: BsModalRef,
    private appTranslate: AppTranslateService
  ) {}

  get lang() {
    return this.appTranslate.getLang();
  }
}
