import { Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppTranslateService } from 'src/app/services/app-translate.service';
import { AppManager } from 'src/app/shared/utils/helper';

export class CustomRender {

  constructor(
    protected routerx: Router,
    protected renderer: Renderer2,
    protected translatex: TranslateService,
    protected appTranslatex: AppTranslateService
  ) {
    this.renderer.addClass(document.body, 'main-body');
    this.renderer.addClass(document.body, 'body-main-margin');
    const lang = this.appTranslatex.getLang();
    this.translatex.use(lang);
    AppManager.instance.addBeforeUnload();
  }

  destroy() {
    this.renderer.removeClass(document.body, 'main-body');
    this.renderer.removeClass(document.body, 'body-main-margin');
    AppManager.instance.removeBeforeUnload();
  }

  goto(s: string, reload = false) {
    AppManager.instance.removeBeforeUnload();
    this.routerx.navigate([s]).then((x) => {
      if (reload) {
        AppManager.instance.removeBeforeUnload();
        location.href = location.href;
      }
    });

    return false;
  }
}