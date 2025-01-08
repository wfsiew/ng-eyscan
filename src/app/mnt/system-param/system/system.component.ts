import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system',
  standalone: false,
  
  templateUrl: './system.component.html',
  styleUrl: './system.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SystemComponent {

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
