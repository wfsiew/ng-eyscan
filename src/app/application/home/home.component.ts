import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CustomRender } from 'src/app/shared/classes/custom-render';
import { AppManager, Helper } from 'src/app/shared/utils/helper';
import { TranslateService } from '@ngx-translate/core';
import { AppTranslateService } from 'src/app/services/app-translate.service';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent extends CustomRender implements OnDestroy {

  selected?: string = '';
  selectedRange?: string = '';

  constructor(
    protected router: Router,
    protected renderer2: Renderer2,
    protected translate: TranslateService,
    protected appTranslate: AppTranslateService
  ) {
    super(router, renderer2, translate, appTranslate);
    this.getDateRange('yesterday');
  }

  ngOnDestroy() {
    AppManager.instance.removeBeforeUnload();
    super.destroy();
  }

  getDateRange(s: string) {
    let r = '';
    const dt = new Date();
    if (s === 'today') {
      r = `${Helper.toDateStr(dt)} To ${Helper.toDateStr(dt)}`;
    }

    else if (s === 'yesterday') {
      const dy = new Date();
      dy.setDate(dt.getDate() - 1);
      r = `${Helper.toDateStr(dy)} To ${Helper.toDateStr(dt)}`;
    }

    else if (s === 'last7') {
      const dy = new Date();
      dy.setDate(dt.getDate() - 7);
      r = `${Helper.toDateStr(dy)} To ${Helper.toDateStr(dt)}`;
    }

    else if (s === 'last30') {
      const dy = new Date();
      dy.setDate(dt.getDate() - 30);
      r = `${Helper.toDateStr(dy)} To ${Helper.toDateStr(dt)}`;
    }

    else if (s === 'tm') {
      const da = new Date(dt.getFullYear(), dt.getMonth(), 1);
      const db = new Date();
      db.setMonth(db.getMonth() + 1);
      db.setDate(0);
      r = `${Helper.toDateStr(da)} To ${Helper.toDateStr(db)}`;
    }

    else if (s === 'lm') {
      const da = new Date();
      da.setMonth(dt.getMonth() - 1, 1);
      const db = new Date();
      db.setDate(0);
      r = `${Helper.toDateStr(da)} To ${Helper.toDateStr(db)}`;
    }

    this.selectedRange = r;
    this.selected = s;
    return false;
  }
}
