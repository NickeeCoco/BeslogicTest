import { Component } from '@angular/core';
import { Rental } from '../rental';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.css']
})
export class RentalDetailsComponent {
  public currentRentalId: any;
  public rental: Rental | undefined;

  constructor(private rentalService: RentalService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getCurrentRentalId();
    this.getRental(this.currentRentalId.id);
  }

  public getCurrentRentalId(): void {
    this.route.params.subscribe({
      next: response => this.currentRentalId = response,
      error: e => alert(e.message)
    })
  }

  public getRental(id: number) {
    this.rentalService.getRentalById(id).subscribe({
      next: response => this.rental = response,
      error: e => alert(e.message)
    })
  }
}
