import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
productList:Array<number>=[];
@Output()
incEmit=new EventEmitter(); 

increment(q:number){
  this.incEmit.emit(q);
}

// decrement(q:number){
//   this.is
// }


}
