import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-forgotpwd',
  standalone: false,
  
  templateUrl: './forgotpwd.component.html',
  styleUrl: './forgotpwd.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ForgotpwdComponent {

  lang = 'en';

  constructor(
    private router: Router,
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
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

  onLogin() {
    this.router.navigate(['/'], { skipLocationChange: true });
    return false;
  }
}
