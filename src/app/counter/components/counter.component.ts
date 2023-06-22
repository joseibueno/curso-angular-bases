import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  //templateUrl: './counter.component.html'
  template: `
  <h3> Counter {{ counter}}</h3>
<button (click)="increaseBy(+1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent  {
  private static DEFAULT_VALUE : number = 10;
  public counter: number = CounterComponent.DEFAULT_VALUE;

  increaseBy(value : number) : void {
    this.counter += value;
  }

  reset() {
    this.counter = CounterComponent.DEFAULT_VALUE;
  }
}
