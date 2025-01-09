import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupCreateComponent } from './lookup-create.component';

describe('LookupCreateComponent', () => {
  let component: LookupCreateComponent;
  let fixture: ComponentFixture<LookupCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LookupCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
