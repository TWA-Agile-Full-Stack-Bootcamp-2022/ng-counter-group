import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {
  numbers: number[] = [];
  inputSize = new FormControl('');

  get sum(): number {
    return this.numbers.reduce((acc, cur) => acc + cur, 0);
  }

  onIncrease(): void {
    this.numbers.push(0);
  }

  onDecrease(): void {
    this.numbers.pop();
  }


  onSetSize(): void {
    if (Number.isInteger(Number(this.inputSize.value))) {
      console.log(Number(this.inputSize.value));
      this.numbers = Array(Number(this.inputSize.value)).fill(0) as number[];
    }
  }

  trackByFn(index: number): number {
    return index;
  }
}
