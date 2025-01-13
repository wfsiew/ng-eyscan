import { Component, Inject, OnDestroy, Renderer2, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { AppTranslateService } from '../services/app-translate.service';
import { ErrorBoxComponent } from 'src/app/shared/components/error-box/error-box.component';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnDestroy {

  mform?: UntypedFormGroup;
  bsModalRef?: BsModalRef;

  private cssLink?: HTMLLinkElement;

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private fb: UntypedFormBuilder,
    private translate: TranslateService,
    private appTranslate: AppTranslateService,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.createForm();
    const lang = appTranslate.getLang();
    if (lang) {
      this.mform?.patchValue({ inLang: lang });
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

  createForm() {
    this.mform = this.fb.group({
      inEmail: ['', [Validators.required]],
      inPassword: ['', [Validators.required]],
      inLang: ['en']
    });
  }

  onForgotPwd() {
    this.router.navigate(['/forgotpwd'], { skipLocationChange: true });
    return false;
  }

  onSubmit() {
    if (this.mform?.invalid) {
      this.mform?.markAllAsTouched();
      return;
    }
    // const initialState = {
    //   err: '...'
    // };
    // this.bsModalRef = this.modalService.show(ErrorBoxComponent, { 
    //   class: 'modal-lg error-modal',
    //   backdrop: 'static',
    //   ariaLabelledBy: '__nhErrorBox_title',
    //   initialState
    // });

    this.router.navigate(['/application/home']);
  }

  onChangeLang(ev: any) {
    this.mform?.patchValue({ inLang: ev.target.value });
    this.translate.use(ev.target.value);
    this.appTranslate.setLang(ev.target.value);
    location.href = location.href;
  }

  get lang() {
    const f = this.mform?.value;
    return f.inLang;
  }

  get f() {
    return this.mform?.controls;
  }

  invalid(s: string) {
    const m = this.mform?.controls[s];
    if (!m) {
      return false;
    }

    return m.invalid && (m.dirty || m.touched);
  }
}
