import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-user',
  standalone: false,
  
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AdminUserComponent {

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
