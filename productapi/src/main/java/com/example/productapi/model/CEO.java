package com.example.productapi.model;

import jakarta.persistence.*;

@Entity
public class CEO extends User {

    @OneToOne
    private Address address;

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}
