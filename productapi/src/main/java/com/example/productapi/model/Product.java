package com.example.productapi.model;

import com.example.productapi.enums.Category;
import jakarta.persistence.*;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long companyId;

    private String name;
    private String description;
    private Category category;
    private Double price;

    public Product() {
    }

    public Product(Long companyId, String name, String description, Category category, Double price) {
        this.companyId = companyId;
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
    }
}
