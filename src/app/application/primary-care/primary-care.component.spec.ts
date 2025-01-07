import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryCareComponent } from './primary-care.component';

describe('PrimaryCareComponent', () => {
  let component: PrimaryCareComponent;
  let fixture: ComponentFixture<PrimaryCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimaryCareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
