package com.example.productapi.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
public class CEO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phone;
    private String address;

    public CEO() {
    }

    public CEO(String firstName, String lastName, String email, String password, String phone, String address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
    }

    @Override
    public String toString() {
        return String.format(
                "%s %s",
                this.firstName,
                this.email
        );
    }
}
