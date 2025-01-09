import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() reload: string = '';
  @Input() menu: string = '';
  @Input() headerid: string = '';
  @Input() title: string = '';

  constructor(private router: Router) {

  }

  goto(s: string) {
    this.router.navigate([s]);
    if (this.reload === s) {
      location.href = location.href;
    }

    return false;
  }
}
