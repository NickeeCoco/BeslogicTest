import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Rental } from '../rental';

@Component({
  selector: 'app-edit-rental',
  templateUrl: './edit-rental.component.html',
  styleUrls: ['./edit-rental.component.css']
})
export class EditRentalComponent {
  @Input() currentRental: Rental | undefined;

  ngOnInit() {
    console.log(this.currentRental);
  }
  @Output() cancelEdit = new EventEmitter<boolean>();

  public onCancelEdit() {
    this.cancelEdit.emit(false);
  }
}
