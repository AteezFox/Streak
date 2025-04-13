package com.example.productapi.model;

import com.example.productapi.enums.UserType;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phone;
    private String address;
    private UserType userType;

    public User() {
    }

    public User(String firstName, String lastName, String email, String password, String phone, String address, UserType userType) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.userType = userType;
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
