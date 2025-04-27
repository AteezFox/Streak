package com.example.productapi.dto;

import com.example.productapi.enums.UserType;
import lombok.*;

@Data
public class UserResponseDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private UserType userType;
}
