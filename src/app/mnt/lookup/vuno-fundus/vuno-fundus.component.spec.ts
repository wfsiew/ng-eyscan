import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VunoFundusComponent } from './vuno-fundus.component';

describe('VunoFundusComponent', () => {
  let component: VunoFundusComponent;
  let fixture: ComponentFixture<VunoFundusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VunoFundusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VunoFundusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
