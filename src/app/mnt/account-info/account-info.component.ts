import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CustomRender } from 'src/app/shared/custom-render';

@Component({
  selector: 'app-account-info',
  standalone: false,
  
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.css'
})
export class AccountInfoComponent extends CustomRender implements OnDestroy {

  constructor(
    private router: Router,
    protected renderer2: Renderer2
  ) {
    super(renderer2);
  }

  ngOnDestroy() {
    super.destroy();
  }

  goto(s: string, reload = false) {
    this.router.navigate([s]);
    if (reload) {
      location.href = location.href;
    }

    return false;
  }
}
