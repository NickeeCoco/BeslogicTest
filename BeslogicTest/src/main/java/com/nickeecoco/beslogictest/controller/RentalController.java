package com.nickeecoco.beslogictest.controller;

import com.nickeecoco.beslogictest.model.Rental;
import com.nickeecoco.beslogictest.service.RentalService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rental")
public class RentalController {
    private final RentalService rentalService;

    public RentalController(RentalService rentalService) {
        this.rentalService = rentalService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Rental>> getAllRentals() {
        List<Rental> rentals = rentalService.findAllRentals();
        return new ResponseEntity<>(rentals, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Rental> getRentalById(@PathVariable Long id) {
        Rental rental = rentalService.findRentalById(id);
        return new ResponseEntity<>(rental, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Rental> addRental(@RequestBody Rental rental) {
        Rental newRental = rentalService.addRental(rental);
        return new ResponseEntity<>(newRental, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Rental> updateRental(@RequestBody Rental rental) {
        Rental updatedRental = rentalService.addRental(rental);
        return new ResponseEntity<>(updatedRental, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> updateRental(@PathVariable Long id) {
        rentalService.deleteRental(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
