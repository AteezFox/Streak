package com.example.productapi.dto;

import com.example.productapi.enums.UserType;
import lombok.*;

@Getter
@Setter
public class RegisterRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phone;
    private UserType userType;
}
