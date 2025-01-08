import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primary-screeners',
  standalone: false,
  
  templateUrl: './primary-screeners.component.html',
  styleUrl: './primary-screeners.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PrimaryScreenersComponent {

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
