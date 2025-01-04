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
    location.href = location.href;
    return false;
  }

  onReportsMgmt() {
    this.router.navigate(['/reports/mgmt']);
    return false;
  }
}
