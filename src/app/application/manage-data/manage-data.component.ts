import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-data',
  standalone: false,
  
  templateUrl: './manage-data.component.html',
  styleUrl: './manage-data.component.css'
})
export class ManageDataComponent implements OnInit, OnDestroy {

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

  createForm() {
    this.mform = this.fb.group({
      date_from: [''],
      date_to: ['']
    });
    const dt = new Date();
    const df = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() - 7);
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
