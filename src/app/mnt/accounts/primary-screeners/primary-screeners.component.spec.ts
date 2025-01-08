import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryScreenersComponent } from './primary-screeners.component';

describe('PrimaryScreenersComponent', () => {
  let component: PrimaryScreenersComponent;
  let fixture: ComponentFixture<PrimaryScreenersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimaryScreenersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryScreenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
