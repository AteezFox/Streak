package com.example.productapi.service;

import com.example.productapi.converter.ProductConverter;
import com.example.productapi.dto.ProductDTO;
import com.example.productapi.model.Product;
import com.example.productapi.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<ProductDTO> getProducts() {
        return productRepository.findAll().stream().map(ProductConverter::toDTO).collect(Collectors.toList());
    }

    public ProductDTO getProductById(Long id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
        return ProductConverter.toDTO(product);
    }

    public ProductDTO createProduct(ProductDTO productDTO) {
        Product product = ProductConverter.toEntity(productDTO);
        Product savedProduct = productRepository.save(product);
        return ProductConverter.toDTO(savedProduct);
    }

    public ProductDTO updateProduct(Long id, ProductDTO productDTO) {
        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
        product.setCompanyId(productDTO.getCompanyId());
        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setCategory(productDTO.getCategory());
        product.setPrice(productDTO.getPrice());
        return ProductConverter.toDTO(productRepository.save(product));
    }

    public void deleteProduct(Long id) {
        if(!productRepository.existsById(id)) {
            throw new RuntimeException("Product not found");
        }
        productRepository.deleteById(id);
    }
}
