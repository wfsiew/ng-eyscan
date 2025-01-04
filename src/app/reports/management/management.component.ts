import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-management',
  standalone: false,
  
  templateUrl: './management.component.html',
  styleUrl: './management.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ManagementComponent implements OnInit {

  mform?: UntypedFormGroup;

  constructor(
    private router: Router,
    private fb: UntypedFormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.mform = this.fb.group({
      date_from: [''],
      date_to: ['']
    });
  }

  onAccInfo() {
    this.router.navigate(['/mnt/user']);
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
    location.href = location.href;
    return false;
  }
}
