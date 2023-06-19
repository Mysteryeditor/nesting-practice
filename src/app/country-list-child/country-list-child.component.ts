import { Component ,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-country-list-child',
  templateUrl: './country-list-child.component.html',
  styleUrls: ['./country-list-child.component.css']
})
export class CountryListChildComponent {
@Input()
countrieslist:Array<string>=[];
@Output()
onCountrySelected=new EventEmitter();

selectCountry(name:string)
{
  this.onCountrySelected.emit(name);
}


}
