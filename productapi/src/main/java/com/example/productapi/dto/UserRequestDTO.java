package com.example.productapi.dto;

import com.example.productapi.enums.UserType;
import lombok.*;

@Data
public class UserRequestDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private UserType userType;
}
