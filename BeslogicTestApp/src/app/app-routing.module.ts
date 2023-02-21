import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { RentalsComponent } from './rentals/rentals.component';

const routes: Routes = [
  {path: 'home', component: RentalsComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path: 'details/:id', component: RentalDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
