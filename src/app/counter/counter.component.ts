import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {
  @Input() counter = 0;
  @Output() counterChange = new EventEmitter<number>();

  onIncrease(): void {
    this.counter++;
    this.counterChange.emit(this.counter);
  }

  onDecrease(): void {
    this.counter--;
    this.counterChange.emit(this.counter);
  }

  onReset(): void {
    this.counter = 0;
    this.counterChange.emit(this.counter);
  }

}
