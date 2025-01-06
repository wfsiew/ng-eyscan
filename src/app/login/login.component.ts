import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { AppTranslateService } from '../services/app-translate.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  lang = 'en';

  constructor(
    private router: Router,
    private translate: TranslateService,
    private appTranslate: AppTranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    const lang = appTranslate.getLang();
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

  onForgotPwd() {
    this.router.navigate(['/forgotpwd'], { skipLocationChange: true });
    return false;
  }

  onSubmit() {
    this.router.navigate(['/home']).then(() => {
      const cssLink = this.document.getElementById(
        'stylesheet_bg'
      ) as HTMLLinkElement;
      if (cssLink) {
        const head = this.document.getElementsByTagName('head')[0];
        head.removeChild(cssLink);
      }
      
    });
    return false;
  }

  onChangeLang(ev: any) {
    this.lang = ev.target.value;
    this.translate.use(ev.target.value);
    this.appTranslate.setLang(this.lang);
    location.href = location.href;
  }
}
