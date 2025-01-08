import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sys-application',
  standalone: false,
  
  templateUrl: './sys-application.component.html',
  styleUrl: './sys-application.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SysApplicationComponent {

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
