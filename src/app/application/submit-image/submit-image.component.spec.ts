import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitImageComponent } from './submit-image.component';

describe('SubmitImageComponent', () => {
  let component: SubmitImageComponent;
  let fixture: ComponentFixture<SubmitImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmitImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
