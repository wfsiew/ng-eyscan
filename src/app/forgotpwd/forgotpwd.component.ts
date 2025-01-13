import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { TranslateService } from "@ngx-translate/core";
import { DOCUMENT } from '@angular/common';
import { GeneralForm } from '../shared/classes/general-form';

@Component({
  selector: 'app-forgotpwd',
  standalone: false,
  
  templateUrl: './forgotpwd.component.html',
  styleUrl: './forgotpwd.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ForgotpwdComponent extends GeneralForm {

  lang = 'en';

  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    super();
    this.createForm();
    const lang = localStorage.getItem('lang');
    if (lang) {
      this.lang = lang;
    }

    this.initCss();
  }

  initCss() {
    let cssPath = `assets/css/stylesheet_bg.css`;
    if (this.lang === 'cn') {
      cssPath = 'assets/css/stylesheet_bg_ch.css';
    }

    const head = this.document.getElementsByTagName('head')[0];
    let cssLink = this.document.getElementById(
      'stylesheet_bg'
    ) as HTMLLinkElement;
    if (cssLink) {
      cssLink.href = cssPath;
    }

    else {
      const style = this.document.createElement('link');
      style.id = 'stylesheet_bg';
      style.rel = 'stylesheet';
      style.type = 'text/css';
      style.href = cssPath;

      head.appendChild(style);
    }
  }

  createForm() {
    this.mform = this.fb.group({
      inEmail: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.mform?.invalid) {
      this.mform?.markAllAsTouched();
      return;
    }

  }

  onLogin() {
    this.router.navigate(['/'], { skipLocationChange: true });
    return false;
  }
}
