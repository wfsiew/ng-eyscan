import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysApplicationComponent } from './sys-application.component';

describe('SysApplicationComponent', () => {
  let component: SysApplicationComponent;
  let fixture: ComponentFixture<SysApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SysApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
