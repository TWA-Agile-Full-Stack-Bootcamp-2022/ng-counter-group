import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {
  counterCount = 0;

  onIncrease(): void {
    this.counterCount++;
  }

  onDecrease(): void {
    this.counterCount--;
  }
}
