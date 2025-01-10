import { Renderer2 } from '@angular/core';

export class CustomRender {

  constructor(protected renderer: Renderer2) {
    this.renderer.addClass(document.body, 'main-body');
    this.renderer.addClass(document.body, 'body-main-margin');
  }

  destroy() {
    this.renderer.removeClass(document.body, 'main-body');
    this.renderer.removeClass(document.body, 'body-main-margin');
  }
}