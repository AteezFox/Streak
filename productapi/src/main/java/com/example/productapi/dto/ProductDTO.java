package com.example.productapi.dto;

import com.example.productapi.enums.Category;
import lombok.*;

@Getter
@Setter
public class ProductDTO {
    private Long companyId;
    private String name;
    private String description;
    private Category category;
    private Double price;

    public ProductDTO() {
    }

    public ProductDTO(Long companyId, String name, String description, Category category, Double price) {
        this.companyId = companyId;
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
    }
}
