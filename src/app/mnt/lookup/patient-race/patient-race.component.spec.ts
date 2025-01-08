import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRaceComponent } from './patient-race.component';

describe('PatientRaceComponent', () => {
  let component: PatientRaceComponent;
  let fixture: ComponentFixture<PatientRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientRaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
