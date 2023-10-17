import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {
  numbers: number[] = [];

  get sum(): number {
    return this.numbers.reduce((acc, cur) => acc + cur, 0);
  }

  onIncrease(): void {
    this.numbers.push(0);
  }

  onDecrease(): void {
    this.numbers.pop();
  }

  onCounterChange(index: number, count: number): void {
    this.numbers[index] = count;
  }
}
