import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  constructor(private router: Router) {
    
  }

  onAccInfo() {
    this.router.navigate(['/mnt/user']);
    return false;
  }

  onHome() {
    this.router.navigate(['/application/home']);
    location.href = location.href;
    return false;
  }

  onSubmitImage() {
    this.router.navigate(['/application/submit-image']);
    return false;
  }

  onPrimary() {
    this.router.navigate(['/application/primary']);
    return false;
  }

  onReportsMgmt() {
    this.router.navigate(['/application/reports/mgmt']);
    return false;
  }
}
