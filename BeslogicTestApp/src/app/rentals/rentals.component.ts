import { Component } from '@angular/core';
import { Rental } from '../rental';
import { RentalService } from '../rental.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent {
  public rentals: Rental[] = [];

  constructor(private rentalService: RentalService, private router: Router) {};

  ngOnInit(): void {
    this.getRentals();
  }

  public getRentals(): void {
    this.rentalService.getRentals().subscribe({
      next: response => this.rentals = response,
      error: e => alert(e.message)
    })
  }

  public goToDetails(id: number): void {
    this.router.navigate(['details', id]);
  }

  public goToAddRental(): void {
    this.router.navigate(['add']);
  }
}
