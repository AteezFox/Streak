package com.example.productapi.utils;

import com.example.productapi.enums.Category;
import com.example.productapi.model.Product;
import com.example.productapi.repository.ProductRepository;
import lombok.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final ProductRepository productRepository;

    public DataInitializer(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public void run(String... args) {
        List<Product> products = List.of(
                new Product(1L, "Big Burger", "A juicy big burger with cheese", Category.BURGER, 8.99),
                new Product(3L, "Spicy Pizza", "Pizza with extra chili and pepperoni", Category.PIZZA, 12.50),
                new Product(2L, "Classic Gyros", "Greek-style gyros with tzatziki", Category.GYROS, 9.75),
                new Product(5L, "Cheese Pizza", "Mozzarella and tomato base", Category.PIZZA, 10.00),
                new Product(7L, "Double Burger", "Two beef patties and bacon", Category.BURGER, 11.25),
                new Product(4L, "Chicken Gyros", "Grilled chicken with pita bread", Category.GYROS, 8.50),
                new Product(6L, "BBQ Burger", "Beef burger with BBQ sauce", Category.BURGER, 9.99),
                new Product(2L, "Veggie Pizza", "Loaded with fresh vegetables", Category.PIZZA, 10.75),
                new Product(8L, "Lamb Gyros", "Lamb meat with fresh herbs", Category.GYROS, 10.99),
                new Product(9L, "Mushroom Pizza", "Pizza with mushrooms and cream", Category.PIZZA, 11.00),
                new Product(10L, "Crispy Chicken Burger", "Breaded chicken patty burger", Category.BURGER, 9.50),
                new Product(1L, "Pepperoni Pizza", "Classic pepperoni pizza", Category.PIZZA, 12.00),
                new Product(3L, "Falafel Gyros", "Vegetarian gyros with falafel", Category.GYROS, 8.99),
                new Product(5L, "Triple Burger", "Three patties madness", Category.BURGER, 13.50),
                new Product(6L, "Hawaiian Pizza", "Pizza with pineapple and ham", Category.PIZZA, 11.25),
                new Product(7L, "Pita Gyros", "Traditional pita wrapped gyros", Category.GYROS, 9.00),
                new Product(2L, "Chili Burger", "Spicy burger with jalapeños", Category.BURGER, 10.75),
                new Product(9L, "Four Cheese Pizza", "Pizza with four types of cheese", Category.PIZZA, 12.50),
                new Product(10L, "Gyros Plate", "Gyros served on a plate with fries", Category.GYROS, 10.25),
                new Product(4L, "Classic Burger", "Simple burger with lettuce and tomato", Category.BURGER, 8.25)
        );

        productRepository.saveAll(products);
    }
}

