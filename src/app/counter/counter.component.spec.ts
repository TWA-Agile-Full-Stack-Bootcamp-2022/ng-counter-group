import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase counter when increase button is clicked', () => {
    component.counter = 1;
    component.onIncrease();
    expect(component.counter).toBe(2);
  });

  it('should decrease counter when decrease button is clicked', () => {
    component.counter = 1;
    component.onDecrease();
    expect(component.counter).toBe(0);
  });
});
