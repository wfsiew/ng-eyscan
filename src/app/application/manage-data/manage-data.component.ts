import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CustomRender } from 'src/app/shared/classes/custom-render';

@Component({
  selector: 'app-manage-data',
  standalone: false,
  
  templateUrl: './manage-data.component.html',
  styleUrl: './manage-data.component.css'
})
export class ManageDataComponent extends CustomRender implements OnInit, OnDestroy {

  mform?: UntypedFormGroup;

  constructor(
    protected router: Router,
    protected renderer2: Renderer2,
    private fb: UntypedFormBuilder
  ) {
    super(router, renderer2);
    this.createForm();
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    super.destroy();
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
