import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CustomRender } from 'src/app/shared/classes/custom-render';
import { TranslateService } from '@ngx-translate/core';
import { AppTranslateService } from 'src/app/services/app-translate.service';

@Component({
  selector: 'app-secondary-grader',
  standalone: false,
  
  templateUrl: './secondary-grader.component.html',
  styleUrl: './secondary-grader.component.css'
})
export class SecondaryGraderComponent extends CustomRender implements OnInit, OnDestroy {

  mform?: UntypedFormGroup;

  constructor(
    protected router: Router,
    protected renderer2: Renderer2,
    protected translate: TranslateService,
    protected appTranslate: AppTranslateService,
    private fb: UntypedFormBuilder
  ) {
    super(router, renderer2, translate, appTranslate);
    this.createForm();
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    super.destroy();
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

  onKeyupDate(event: KeyboardEvent, field: string) {
    const key = event.key;
    if (key === 'Backspace') {
      this.mform?.get(field)?.patchValue('');
    }
  }
}
