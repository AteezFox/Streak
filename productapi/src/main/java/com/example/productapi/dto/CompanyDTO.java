package com.example.productapi.dto;

import lombok.*;

@Getter
@Setter
public class CompanyDTO {
    private String name;
    private Long userId;

    public CompanyDTO() {
    }

    public CompanyDTO(Long userId, String name) {
        this.userId = userId;
        this.name = name;
    }
}
