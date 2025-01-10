import { Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Helper } from 'src/app/shared/utils/helper';

export class CustomRender {

  constructor(
    protected routerx: Router,
    protected renderer: Renderer2) {
    this.renderer.addClass(document.body, 'main-body');
    this.renderer.addClass(document.body, 'body-main-margin');
    Helper.addBeforeunload();
  }

  destroy() {
    this.renderer.removeClass(document.body, 'main-body');
    this.renderer.removeClass(document.body, 'body-main-margin');
    Helper.removeBeforeunload();
  }

  goto(s: string, reload = false) {
    Helper.removeBeforeunload();
    this.routerx.navigate([s]);
    if (reload) {
      location.href = location.href;
    }

    return false;
  }
}