import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-add-rental',
  templateUrl: './add-rental.component.html',
  styleUrls: ['./add-rental.component.css']
})
export class AddRentalComponent {
  constructor(private rentalService: RentalService, private router: Router) {}

  public onAddRental(addForm: NgForm): void {
    this.rentalService.addRental(addForm.value).subscribe({
      next: response => {
        alert("The rental was successfully added.");
        addForm.reset;
        this.router.navigate(['home']);
      },
      error: e => {
          alert(e.message);
          addForm.reset();
        }
    })
  }
}
