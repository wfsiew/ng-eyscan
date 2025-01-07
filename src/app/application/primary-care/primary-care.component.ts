import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-primary-care',
  standalone: false,
  
  templateUrl: './primary-care.component.html',
  styleUrl: './primary-care.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PrimaryCareComponent implements OnInit {

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
    const dt = new Date();
    const df = new Date(dt.getFullYear(), dt.getMonth(), 1);
    this.mform.patchValue({ date_from: df, date_to: dt });
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
    location.href = location.href;
    return false;
  }

  onReportsMgmt() {
    this.router.navigate(['/application/reports/mgmt']);
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
