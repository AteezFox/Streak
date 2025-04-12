package com.example.productapi.dto;

import lombok.*;

@Getter
@Setter
public class CEODTO {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phone;
    private String address;

    public CEODTO() {
    }

    public CEODTO(String firstName, String lastName, String email, String password, String phone, String address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
    }
}
