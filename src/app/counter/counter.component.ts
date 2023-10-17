import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {
  counter = 0;

  onIncrease(): void {
    this.counter++;
  }

  onDecrease(): void {
    this.counter--;
  }

}
