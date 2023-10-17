import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {
  numbers: number[] = [];

  onIncrease(): void {
    this.numbers.push(0);
  }

  onDecrease(): void {
    this.numbers.pop();
  }
}
