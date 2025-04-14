package com.example.productapi.dto;

import com.example.productapi.enums.Category;
import com.example.productapi.enums.UserType;
import lombok.*;

@Getter
@Setter
public class ProductDTO {
    private String name;
    private String description;
    private Category category;
    private Double price;

    public ProductDTO() {
    }

    public ProductDTO(String name, String description, Category category, Double price) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
    }
}
