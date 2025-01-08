import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryGradersComponent } from './secondary-graders.component';

describe('SecondaryGradersComponent', () => {
  let component: SecondaryGradersComponent;
  let fixture: ComponentFixture<SecondaryGradersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondaryGradersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryGradersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
