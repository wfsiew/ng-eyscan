import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application',
  standalone: false,
  
  templateUrl: './application.component.html',
  styleUrl: './application.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ApplicationComponent {

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
