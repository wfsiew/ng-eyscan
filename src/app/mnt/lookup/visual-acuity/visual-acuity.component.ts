import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visual-acuity',
  standalone: false,
  
  templateUrl: './visual-acuity.component.html',
  styleUrl: './visual-acuity.component.css',
  encapsulation: ViewEncapsulation.None
})
export class VisualAcuityComponent {

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
