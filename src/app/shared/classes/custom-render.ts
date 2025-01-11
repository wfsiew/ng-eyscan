import { Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AppManager } from 'src/app/shared/utils/helper';

export class CustomRender {

  constructor(
    protected routerx: Router,
    protected renderer: Renderer2) {
    this.renderer.addClass(document.body, 'main-body');
    this.renderer.addClass(document.body, 'body-main-margin');
    AppManager.instance.addBeforeUnload();
  }

  destroy() {
    this.renderer.removeClass(document.body, 'main-body');
    this.renderer.removeClass(document.body, 'body-main-margin');
    AppManager.instance.removeBeforeUnload();
  }

  goto(s: string, reload = false) {
    AppManager.instance.removeBeforeUnload();
    this.routerx.navigate([s]);
    if (reload) {
      location.href = location.href;
    }

    return false;
  }
}