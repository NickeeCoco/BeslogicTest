import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRentalComponent } from './add-rental/add-rental.component';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { RentalsComponent } from './rentals/rentals.component';

const routes: Routes = [
  {path: 'home', component: RentalsComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path: 'details/:id', component: RentalDetailsComponent},
  {path: 'add', component: AddRentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
