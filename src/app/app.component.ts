import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { TranslateService } from '@ngx-translate/core';
import { AppTranslateService } from './services/app-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'EyRIS - Transforming AI Vision into Reality';

  constructor(
    private translate: TranslateService,
    private appTranslate: AppTranslateService
  ) {
    setTheme('bs4');
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    const lang = this.appTranslate.getLang();
    if (lang) {
      this.translate.use(lang);
    }
  }
}
