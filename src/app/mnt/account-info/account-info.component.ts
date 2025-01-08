import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-info',
  standalone: false,
  
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AccountInfoComponent {

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
