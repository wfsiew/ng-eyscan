import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysApplicationCreateComponent } from './sys-application-create.component';

describe('SysApplicationCreateComponent', () => {
  let component: SysApplicationCreateComponent;
  let fixture: ComponentFixture<SysApplicationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SysApplicationCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysApplicationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
