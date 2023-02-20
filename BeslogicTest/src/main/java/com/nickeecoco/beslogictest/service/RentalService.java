package com.nickeecoco.beslogictest.service;

import com.nickeecoco.beslogictest.dao.RentalDao;
import com.nickeecoco.beslogictest.exceptions.RentalNotFoundException;
import com.nickeecoco.beslogictest.model.Rental;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RentalService {
    private final RentalDao rentalDao;

    @Autowired
    public RentalService(RentalDao rentalDao) {
        this.rentalDao = rentalDao;
    }

    public Rental addRental(Rental rental) {
        return rentalDao.save(rental);
    }

    public List<Rental> findAllRentals() {
        return rentalDao.findAll();
    }

    public Rental findRentalById(Long id) {
        return rentalDao.findById(id)
                .orElseThrow(() -> new RentalNotFoundException("Rental with id " + id + " was not found."));
    }

    public Rental updateRental(Rental rental) {
        return rentalDao.save(rental);
    }

    public void deleteRental(Long id) {
        rentalDao.deleteById(id);
    }
}
