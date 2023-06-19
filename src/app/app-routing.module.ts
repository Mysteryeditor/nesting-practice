import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListChildComponent } from './country-list-child/country-list-child.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
