package com.example.productapi.converter;

import com.example.productapi.dto.ProductDTO;
import com.example.productapi.dto.ProductRequestDTO;
import com.example.productapi.dto.ProductResponseDTO;
import com.example.productapi.model.Product;

public class ProductConverter {
    public static ProductDTO toDTO(Product product) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(product.getId());
        productDTO.setCompanyId(product.getCompanyId());
        productDTO.setName(product.getName());
        productDTO.setImage(product.getImage());
        productDTO.setDescription(product.getDescription());
        productDTO.setCategory(product.getCategory());
        productDTO.setPrice(product.getPrice());
        return productDTO;
    }

    public static ProductResponseDTO toResponseDTO(Product product) {
        ProductResponseDTO dto = new ProductResponseDTO();
        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setPrice(product.getPrice());
        dto.setCategory(product.getCategory());
        return dto;
    }

    public static Product toEntity(ProductRequestDTO productRequestDTO) {
        Product product = new Product();
        product.setName(productRequestDTO.getName());
        product.setPrice(productRequestDTO.getPrice());
        product.setCategory(productRequestDTO.getCategory());
        return product;
    }


    public static Product toEntity(ProductDTO productDTO) {
        Product product = new Product();
        product.setId(productDTO.getId());
        product.setCompanyId(productDTO.getCompanyId());
        product.setName(productDTO.getName());
        product.setImage(productDTO.getImage());
        product.setDescription(productDTO.getDescription());
        product.setCategory(productDTO.getCategory());
        product.setPrice(productDTO.getPrice());
        return product;
    }
}
