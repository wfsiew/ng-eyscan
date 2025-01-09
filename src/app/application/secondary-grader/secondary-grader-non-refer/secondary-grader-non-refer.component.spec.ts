import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryGraderNonReferComponent } from './secondary-grader-non-refer.component';

describe('SecondaryGraderNonReferListingComponent', () => {
  let component: SecondaryGraderNonReferComponent;
  let fixture: ComponentFixture<SecondaryGraderNonReferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondaryGraderNonReferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryGraderNonReferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
