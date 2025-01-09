import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vuno-fundus',
  standalone: false,
  
  templateUrl: './vuno-fundus.component.html',
  styleUrl: './vuno-fundus.component.css',
  encapsulation: ViewEncapsulation.None
})
export class VunoFundusComponent {

  constructor(private router: Router) {
    
  }

  goto(s: string, reload = false) {
    this.router.navigate([s]);
    if (reload) {
      location.href = location.href;
    }

    return false;
  }
}
