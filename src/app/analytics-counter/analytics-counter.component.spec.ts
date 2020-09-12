import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsCounterComponent } from './analytics-counter.component';

describe('AnalyticsCounterComponent', () => {
  let component: AnalyticsCounterComponent;
  let fixture: ComponentFixture<AnalyticsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
