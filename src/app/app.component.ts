import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'EyRIS - Transforming AI Vision into Reality';

  constructor(private translate: TranslateService) {
    setTheme('bs4');
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    const lang = localStorage.getItem('lang');
    if (lang) {
      this.translate.use(lang);
    }
  }
}
