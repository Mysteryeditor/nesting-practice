import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  quantityP=[1];

  parentIncrement(data:number){

    const a=data+1;
    this.quantityP[0]=a;
  }


}
