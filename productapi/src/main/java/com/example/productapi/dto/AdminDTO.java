package com.example.productapi.dto;

import lombok.*;

@Getter
@Setter
public class AdminDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    public AdminDTO() {}

    public AdminDTO(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}
