import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpwd',
  standalone: false,
  
  templateUrl: './forgotpwd.component.html',
  styleUrl: './forgotpwd.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ForgotpwdComponent {

  constructor(private router: Router) {
  
  }

  onLogin() {
    this.router.navigate(['/'], { skipLocationChange: true });
    return false;
  }
}
