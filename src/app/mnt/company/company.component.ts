import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  standalone: false,
  
  templateUrl: './company.component.html',
  styleUrl: './company.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CompanyComponent {

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
