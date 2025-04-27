package com.example.productapi.controller;

import com.example.productapi.dto.ProductDTO;
import com.example.productapi.dto.ProductRequestDTO;
import com.example.productapi.dto.ProductResponseDTO;
import com.example.productapi.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/streak/api/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/get")
    public List<ProductDTO> getAllProducts() {
        return productService.getProducts();
    }

    @GetMapping("/get/{size}/{page}")
    public List<ProductDTO> getProductsByPage(@PathVariable Integer size, @PathVariable Integer page) {
        return productService.getProductsPaginated(page, size);
    }

    @GetMapping("/get/{id}")
    public ProductDTO getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @PostMapping("/add")
    public ResponseEntity<ProductDTO> addProduct(@RequestBody ProductDTO productDTO) {
        ProductDTO created = productService.createProduct(productDTO);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    /*@PutMapping("/update/{id}")
    public ResponseEntity<ProductDTO> updateProduct(@PathVariable long id, @RequestBody ProductDTO productDTO) {
        ProductDTO updated = productService.updateProduct(id, productDTO);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }
    */
    @PatchMapping("/update/{id}")
    public ResponseEntity<ProductResponseDTO> updateProduct(
            @PathVariable Long id,
            @RequestBody ProductRequestDTO productRequestDTO) {
        ProductResponseDTO updatedProduct = productService.updateProduct(id, productRequestDTO);
        return ResponseEntity.ok(updatedProduct);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable long id) {
        productService.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
