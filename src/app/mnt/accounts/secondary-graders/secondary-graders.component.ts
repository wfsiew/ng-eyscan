import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondary-graders',
  standalone: false,
  
  templateUrl: './secondary-graders.component.html',
  styleUrl: './secondary-graders.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SecondaryGradersComponent {

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
