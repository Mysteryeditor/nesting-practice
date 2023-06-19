import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-countries-parent',
  templateUrl: './countries-parent.component.html',
  styleUrls: ['./countries-parent.component.css']
})
export class CountriesParentComponent {
favCountries=['Germany','Indonesia','Thailand'];
selectedTutorialtoDisplay(data:string){
  debugger;
  console.log("fn is working")
  console.log(data);
  Swal.fire(data);

}
}
