import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RentalsComponent } from './rentals/rentals.component';
import { RentalDetailsComponent } from './rental-details/rental-details.component';
import { AddRentalComponent } from './add-rental/add-rental.component';

@NgModule({
  declarations: [
    AppComponent,
    RentalsComponent,
    RentalDetailsComponent,
    AddRentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
