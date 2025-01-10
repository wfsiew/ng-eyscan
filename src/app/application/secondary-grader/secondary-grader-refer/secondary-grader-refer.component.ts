import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-secondary-grader-refer',
  standalone: false,
  
  templateUrl: './secondary-grader-refer.component.html',
  styleUrl: './secondary-grader-refer.component.css'
})
export class SecondaryGraderReferComponent implements OnInit, OnDestroy {

  mform?: UntypedFormGroup;

  constructor(
    private router: Router,
    private renderer2: Renderer2,
    private fb: UntypedFormBuilder
  ) {
    this.renderer2.addClass(document.body, 'main-body');
    this.createForm();
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.renderer2.removeClass(document.body, 'main-body');
  }

  onDisclaimer() {
    open('assets/docs/EN_DISCLAIMER.pdf', '_blank');
  }

  createForm() {
    this.mform = this.fb.group({
      date_from: [''],
      date_to: ['']
    });
    const dt = new Date();
    const df = new Date();
    df.setDate(dt.getDate() - 20);
    this.mform.patchValue({ date_from: df, date_to: dt });
  }

  goto(s: string, reload = false) {
    this.router.navigate([s]);
    if (reload) {
      location.href = location.href;
    }

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
