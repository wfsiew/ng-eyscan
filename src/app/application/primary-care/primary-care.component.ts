import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CustomRender } from 'src/app/shared/classes/custom-render';

@Component({
  selector: 'app-primary-care',
  standalone: false,
  
  templateUrl: './primary-care.component.html',
  styleUrl: './primary-care.component.css'
})
export class PrimaryCareComponent extends CustomRender implements OnInit, OnDestroy {

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
    const df = new Date();
    df.setDate(dt.getDate() - 7);
    this.mform.patchValue({ date_from: df, date_to: dt });
  }

  onKeyupDate(event: KeyboardEvent, field: string) {
    const key = event.key;
    if (key === 'Backspace') {
      this.mform?.controls[field].patchValue('')
    }
  }
}
