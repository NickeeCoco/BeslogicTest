import { Component } from '@angular/core';
import { Rental } from '../rental';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent {
  public rentals: Rental[] = [];

  constructor(private rentalService: RentalService) {};

  ngOnInit(): void {
    this.getRentals();
  }

  public getRentals(): void {
    this.rentalService.getRentals().subscribe({
      next: response => this.rentals = response,
      error: e => alert(e.message)
    })
  }
}
