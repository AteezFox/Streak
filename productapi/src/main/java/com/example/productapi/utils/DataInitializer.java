package com.example.productapi.utils;

import com.example.productapi.enums.Category;
import com.example.productapi.model.Product;
import com.example.productapi.model.User;
import com.example.productapi.model.Company;
import com.example.productapi.enums.UserType;
import com.example.productapi.repository.ProductRepository;
import com.example.productapi.repository.UserRepository;
import com.example.productapi.repository.CompanyRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataInitializer {

    private final UserRepository userRepository;
    private final CompanyRepository companyRepository;
    private final ProductRepository productRepository;

    public DataInitializer(UserRepository userRepository, CompanyRepository companyRepository, ProductRepository productRepository) {
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
        this.productRepository = productRepository;
    }

    @PostConstruct
    public void init() {
        List<User> users = List.of(
                new User("John", "Doe", "john.doe@company.com", "password123", "123-456-7890", "123 Elm Street", UserType.CEO),
                new User("Jane", "Smith", "jane.smith@company.com", "password123", "123-456-7891", "124 Elm Street", UserType.CEO),
                new User("Bob", "Johnson", "bob.johnson@company.com", "password123", "123-456-7892", "125 Elm Street", UserType.CEO),
                new User("Alice", "Brown", "alice.brown@company.com", "password123", "123-456-7893", "126 Elm Street", UserType.CEO),
                new User("Charlie", "Davis", "charlie.davis@company.com", "password123", "123-456-7894", "127 Elm Street", UserType.CEO),
                new User("Courier1", "One", "courier1@example.com", "password123", "123-555-7890", "Courier Address 1", UserType.COURIER),
                new User("Courier2", "Two", "courier2@example.com", "password123", "123-555-7891", "Courier Address 2", UserType.COURIER),
                new User("Courier3", "Three", "courier3@example.com", "password123", "123-555-7892", "Courier Address 3", UserType.COURIER),
                new User("Admin", "User", "admin@example.com", "password123", "123-555-0000", "Admin HQ", UserType.ADMIN)
        );

        userRepository.saveAll(users);

        List<Company> companies = List.of(
                new Company(users.get(0).getId(), "Doe Enterprises"),
                new Company(users.get(1).getId(), "Smith Innovations"),
                new Company(users.get(2).getId(), "Johnson Solutions"),
                new Company(users.get(3).getId(), "Brown Technologies"),
                new Company(users.get(4).getId(), "Davis Ventures")
        );

        companyRepository.saveAll(companies);

        List<Product> products = List.of(
                new Product(companies.get(0).getId(), "Margherita Pizza", "placeholder_base64", "Classic margherita pizza with fresh basil.", Category.PIZZA, 8.99),
                new Product(companies.get(0).getId(), "Pepperoni Feast", "placeholder_base64", "Loaded with spicy pepperoni and mozzarella.", Category.PIZZA, 10.99),
                new Product(companies.get(0).getId(), "Veggie Supreme", "placeholder_base64", "A colorful mix of vegetables on a crispy base.", Category.PIZZA, 9.49),
                new Product(companies.get(0).getId(), "BBQ Chicken Pizza", "placeholder_base64", "Savory BBQ sauce and grilled chicken.", Category.PIZZA, 11.49),
                new Product(companies.get(0).getId(), "Four Cheese Delight", "placeholder_base64", "Melted blend of four rich cheeses.", Category.PIZZA, 10.49),
                new Product(companies.get(1).getId(), "Classic Cheeseburger", "placeholder_base64", "Juicy beef patty with melted cheese.", Category.BURGER, 7.99),
                new Product(companies.get(1).getId(), "Bacon Double Burger", "placeholder_base64", "Double beef with crispy bacon.", Category.BURGER, 9.99),
                new Product(companies.get(1).getId(), "Veggie Burger", "placeholder_base64", "Healthy plant-based patty with fresh toppings.", Category.BURGER, 8.49),
                new Product(companies.get(1).getId(), "Spicy Jalapeno Burger", "placeholder_base64", "Kick of spice with jalapenos and pepper jack.", Category.BURGER, 9.49),
                new Product(companies.get(1).getId(), "Mushroom Swiss Burger", "placeholder_base64", "Earthy mushrooms and Swiss cheese.", Category.BURGER, 8.99),
                new Product(companies.get(2).getId(), "Classic Chicken Gyros", "placeholder_base64", "Tender chicken wrapped in soft pita.", Category.GYROS, 7.49),
                new Product(companies.get(2).getId(), "Beef Gyros Deluxe", "placeholder_base64", "Succulent beef slices with tzatziki.", Category.GYROS, 8.49),
                new Product(companies.get(2).getId(), "Falafel Gyros", "placeholder_base64", "Crispy falafel and fresh veggies.", Category.GYROS, 7.99),
                new Product(companies.get(2).getId(), "Spicy Lamb Gyros", "placeholder_base64", "Lamb gyros with a spicy twist.", Category.GYROS, 9.49),
                new Product(companies.get(2).getId(), "Mediterranean Gyros", "placeholder_base64", "Light and refreshing gyros option.", Category.GYROS, 8.99),
                new Product(companies.get(3).getId(), "Tropical Mango Juice", "placeholder_base64", "Refreshing mango juice blend.", Category.JUICE, 4.49),
                new Product(companies.get(3).getId(), "Berry Blast Shake", "placeholder_base64", "Creamy shake bursting with berries.", Category.SHAKE, 5.49),
                new Product(companies.get(3).getId(), "Classic Cola", "placeholder_base64", "All-time favorite fizzy drink.", Category.SODA, 2.49),
                new Product(companies.get(3).getId(), "Chocolate Milkshake", "placeholder_base64", "Rich chocolate flavor.", Category.SHAKE, 5.99),
                new Product(companies.get(3).getId(), "Sparkling Orange Soda", "placeholder_base64", "Citrusy sparkling treat.", Category.SODA, 2.99),
                new Product(companies.get(4).getId(), "Hotdog Classic", "placeholder_base64", "Grilled hotdog with ketchup and mustard.", Category.HOTDOG, 5.49),
                new Product(companies.get(4).getId(), "Chili Cheese Hotdog", "placeholder_base64", "Spicy chili and melted cheese.", Category.HOTDOG, 6.49),
                new Product(companies.get(4).getId(), "Lunch Combo Menu", "placeholder_base64", "Burger, fries, and drink combo.", Category.MENU, 11.99),
                new Product(companies.get(4).getId(), "Family Feast Menu", "placeholder_base64", "A full meal for the whole family.", Category.MENU, 24.99),
                new Product(companies.get(4).getId(), "Kids Menu", "placeholder_base64", "Smaller portions for the little ones.", Category.MENU, 7.99)
        );

        productRepository.saveAll(products);
    }
}
