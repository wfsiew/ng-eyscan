import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySecondaryUserComponent } from './primary-secondary-user.component';

describe('PrimarySecondaryUserComponent', () => {
  let component: PrimarySecondaryUserComponent;
  let fixture: ComponentFixture<PrimarySecondaryUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimarySecondaryUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimarySecondaryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
