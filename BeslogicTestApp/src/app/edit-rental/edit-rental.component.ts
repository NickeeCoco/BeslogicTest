import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Rental } from '../rental';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-edit-rental',
  templateUrl: './edit-rental.component.html',
  styleUrls: ['./edit-rental.component.css']
})
export class EditRentalComponent {
  @Input() currentRental: Rental | undefined;
  @Output() cancelEdit = new EventEmitter<boolean>();

  constructor(private rentalService: RentalService, private router: Router) {};

  public onCancelEdit() {
    this.cancelEdit.emit(false);
  }

  public onEditRental(editForm: NgForm): void {
    this.rentalService.editRental(editForm.value).subscribe({
      next: response => {
        alert("The rental was successfully edited.");
        this.onCancelEdit();
        this.router.navigate(['home']);
      },
      error: e => alert(e.message)
    })
  }

}
