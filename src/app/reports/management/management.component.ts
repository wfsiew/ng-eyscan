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
    this.router.navigate(['/application/home']);
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
    location.href = location.href;
    return false;
  }

  onKeyupFrom(event: KeyboardEvent) {
    const key = event.key;
    if (key === 'Backspace') {
      this.mform?.patchValue({ date_from: '' });
    }
  }

  onKeyupTo(event: KeyboardEvent) {
    const key = event.key;
    if (key === 'Backspace') {
      this.mform?.patchValue({ date_to: '' });
    }
  }
}
