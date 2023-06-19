import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  productList: Array<number> = [];
  @Output()
  // incrementing object
  incEmit = new EventEmitter();

  increment(q: number) {
    this.incEmit.emit(q);
  }

  @Output()
// decrementing object
  decEmit = new EventEmitter();
  decrement(q1: number) {
    this.decEmit.emit(q1);
  }
}


