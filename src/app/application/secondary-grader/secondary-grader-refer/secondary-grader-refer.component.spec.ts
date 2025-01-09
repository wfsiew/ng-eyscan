import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryGraderReferComponent } from './secondary-grader-refer.component';

describe('SecondaryGraderReferListingComponent', () => {
  let component: SecondaryGraderReferComponent;
  let fixture: ComponentFixture<SecondaryGraderReferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondaryGraderReferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryGraderReferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
