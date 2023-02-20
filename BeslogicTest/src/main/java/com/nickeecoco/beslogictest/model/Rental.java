package com.nickeecoco.beslogictest.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.math.BigDecimal;

@Entity
public class Rental implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String title;
    private String description;
    private String city;
    private String country;
    private BigDecimal price;
    private boolean isFavorite;
    private double rating;

    public Long getId() {
        return id;
    }

    public Rental() {};

    public Rental(Long id, String title, String description, String city, String country, BigDecimal price, boolean isFavorite, double rating, int numberOfGuests, int numberOfBedrooms, String host, String imageUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.city = city;
        this.country = country;
        this.price = price;
        this.isFavorite = isFavorite;
        this.rating = rating;
        this.numberOfGuests = numberOfGuests;
        this.numberOfBedrooms = numberOfBedrooms;
        this.host = host;
        this.imageUrl = imageUrl;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getCity() {
        return city;
    }


    public String getCountry() {
        return country;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public boolean isFavorite() {
        return isFavorite;
    }

    public double getRating() {
        return rating;
    }

    public int getNumberOfGuests() {
        return numberOfGuests;
    }

    public int getNumberOfBedrooms() {
        return numberOfBedrooms;
    }

    public String getHost() {
        return host;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    private int numberOfGuests;
    private int numberOfBedrooms;
    private String host;
    private String imageUrl;

    @Override
    public String toString() {
        return "Rental{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", city='" + city + '\'' +
                ", country='" + country + '\'' +
                ", price=" + price +
                ", isFavorite=" + isFavorite +
                ", rating=" + rating +
                ", numberOfGuests=" + numberOfGuests +
                ", numberOfBedrooms=" + numberOfBedrooms +
                ", host='" + host + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}
