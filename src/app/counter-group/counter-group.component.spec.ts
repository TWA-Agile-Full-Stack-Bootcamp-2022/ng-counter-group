import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterGroupComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase counter when increase button is clicked', () => {
    component.numbers = [0];
    component.onIncrease();
    expect(component.numbers.length).toBe(2);
  });

  it('should decrease counter when decrease button is clicked', () => {
    component.numbers = [0];
    component.onDecrease();
    expect(component.numbers.length).toBe(0);
  });
});
