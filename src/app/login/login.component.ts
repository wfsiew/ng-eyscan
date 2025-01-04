import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  constructor(private router: Router) {

  }

  onForgotPwd() {
    this.router.navigate(['/forgotpwd'], { skipLocationChange: true });
    return false;
  }

  onSubmit() {
    this.router.navigate(['/home']);
    return false;
  }
}
