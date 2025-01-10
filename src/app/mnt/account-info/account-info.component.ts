import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-info',
  standalone: false,
  
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.css'
})
export class AccountInfoComponent implements OnDestroy {

  constructor(
    private router: Router,
    private renderer2: Renderer2
  ) {
    this.renderer2.addClass(document.body, 'main-body');
  }

  ngOnDestroy() {
    this.renderer2.removeClass(document.body, 'main-body');
  }

  goto(s: string, reload = false) {
    this.router.navigate([s]);
    if (reload) {
      location.href = location.href;
    }

    return false;
  }
}
