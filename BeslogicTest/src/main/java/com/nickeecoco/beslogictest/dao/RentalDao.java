package com.nickeecoco.beslogictest.dao;

import com.nickeecoco.beslogictest.model.Rental;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalDao extends JpaRepository<Rental, Long> {
}
