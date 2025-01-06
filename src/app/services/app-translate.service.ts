import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

// https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular8-16-app-with-ngx-translate

@Injectable({
  providedIn: 'root'
})
export class AppTranslateService {

  constructor(private translate: TranslateService) { }

  setLang(s: string) {
    localStorage.setItem('lang', s);
  }

  getLang() {
    let lang = localStorage.getItem('lang');
    if (!lang) {
      lang = 'en';
    }

    return lang;
  }
}
