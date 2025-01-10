import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CustomRender } from 'src/app/shared/classes/custom-render';
import { Helper } from 'src/app/shared/utils/helper';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent extends CustomRender implements OnDestroy {

  constructor(
    private router: Router,
    protected renderer2: Renderer2
  ) {
    super(renderer2);
  }

  ngOnDestroy() {
    Helper.removeBeforeunload();
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
