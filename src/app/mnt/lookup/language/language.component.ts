import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language',
  standalone: false,
  
  templateUrl: './language.component.html',
  styleUrl: './language.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LanguageComponent {

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
