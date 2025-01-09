import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryGraderQueueComponent } from './secondary-grader-queue.component';

describe('SecondaryGraderQueueListingComponent', () => {
  let component: SecondaryGraderQueueComponent;
  let fixture: ComponentFixture<SecondaryGraderQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondaryGraderQueueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryGraderQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
