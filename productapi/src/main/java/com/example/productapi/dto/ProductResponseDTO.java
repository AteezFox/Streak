package com.example.productapi.dto;

import com.example.productapi.enums.Category;
import lombok.*;

@Data
public class ProductResponseDTO {
    private Long id;
    private String name;
    private Double price;
    private Category category;
}
