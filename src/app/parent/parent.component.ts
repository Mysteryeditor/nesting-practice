import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  quantityP = [0];

  parentIncrement(data: number) {
    if (data < 100) {//if the value is more than 100 the increment is not supposed to happen
      const a = data + 1;
      this.quantityP[0] = a;
    }

    else{
      Swal.fire({
        icon:'error',
        title:'Oops...',
        text:"Quantity cannot exceed 100!"
      })
    }

  }

  parentDecrement(data: number) {
if(data>0){//same thing for less than zero
  const b = data - 1;
    this.quantityP[0] = b;
}

else{
  Swal.fire(
    {
      icon:'error',
      text:"Value should be greater than 0"
    }
  )
}
  
  }


}
