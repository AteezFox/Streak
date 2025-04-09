package com.example.productapi.converter;

import com.example.productapi.model.Product;
import com.example.productapi.dto.ProductDTO;

public class ProductConverter {

    public static ProductDTO toDTO(Product product) {
        ProductDTO dto = new ProductDTO();
        dto.setName(product.getName());
        dto.setCategory(product.getCategory().name());
        dto.setPrice(product.getPrice());
        dto.setImage(product.getImage());
        dto.setCompanyId(product.getCompany().getId());
        return dto;
    }

    public static Product toEntity(ProductDTO dto) {
        Product product = new Product();
        product.setName(dto.getName());
        product.setCategory(Product.Category.valueOf(dto.getCategory()));
        product.setPrice(dto.getPrice());
        product.setImage(dto.getImage());
        // You would need to handle the company association here
        return product;
    }
}
