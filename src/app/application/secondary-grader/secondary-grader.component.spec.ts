import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryGraderComponent } from './secondary-grader.component';

describe('SecondaryGraderComponent', () => {
  let component: SecondaryGraderComponent;
  let fixture: ComponentFixture<SecondaryGraderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondaryGraderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryGraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
