import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-info',
  standalone: false,
  
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AccountInfoComponent {

  constructor(private router: Router) {
    
  }

  onAccInfo() {
    this.router.navigate(['/mnt/user']);
    location.href = location.href;
    return false;
  }

  onHome() {
    this.router.navigate(['/home']);
    return false;
  }

  onSubmitImage() {
    this.router.navigate(['/submit-image']);
    return false;
  }

  onPrimary() {
    this.router.navigate(['/primary']);
    return false;
  }

  onReportsMgmt() {
    this.router.navigate(['/reports/mgmt']);
    return false;
  }
}
