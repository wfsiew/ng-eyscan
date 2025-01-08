import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primary-secondary-user',
  standalone: false,
  
  templateUrl: './primary-secondary-user.component.html',
  styleUrl: './primary-secondary-user.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PrimarySecondaryUserComponent {

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
