import { Component, Inject, OnDestroy, Renderer2, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { AppTranslateService } from '../services/app-translate.service';
import { ErrorBoxComponent } from '../shared/components/error-box/error-box.component';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnDestroy {

  lang = 'en';

  private cssLink?: HTMLLinkElement;
  bsModalRef?: BsModalRef;

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private translate: TranslateService,
    private appTranslate: AppTranslateService,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    const lang = appTranslate.getLang();
    if (lang) {
      this.lang = lang;
    }

    this.initCss();
  }

  ngOnDestroy() {
    this.renderer2.removeChild(this.document.head, this.cssLink);
  }

  initCss() {
    let cssPath = `assets/css/stylesheet_bg.css`;
    if (this.lang === 'cn') {
      cssPath = 'assets/css/stylesheet_bg_ch.css';
    }

    this.cssLink = this.renderer2.createElement('link') as HTMLLinkElement;
    this.renderer2.appendChild(this.document.head, this.cssLink);
    this.renderer2.setProperty(this.cssLink, 'rel', 'stylesheet');
    this.renderer2.setProperty(this.cssLink, 'href', cssPath);
  }

  onForgotPwd() {
    this.router.navigate(['/forgotpwd'], { skipLocationChange: true });
    return false;
  }

  onSubmit() {
    // const initialState = {
    //   err: '...'
    // };
    // this.bsModalRef = this.modalService.show(ErrorBoxComponent, { 
    //   class: 'modal-lg',
    //   backdrop: 'static',
    //   ariaLabelledBy: '__nhErrorBox_title',
    //   initialState
    // });

    this.router.navigate(['/application/home']);
    return false;
  }

  onChangeLang(ev: any) {
    this.lang = ev.target.value;
    this.translate.use(ev.target.value);
    this.appTranslate.setLang(this.lang);
    location.href = location.href;
  }
}
