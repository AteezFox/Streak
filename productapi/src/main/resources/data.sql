USE streakdb;
INSERT INTO user (first_name, last_name, email, password, phone, address, user_type) VALUES
                                                                                         ('John', 'Doe', 'john.doe@company.com', 'password123', '123-456-7890', '123 Elm Street', 2),
                                                                                         ('Jane', 'Smith', 'jane.smith@company.com', 'password123', '123-456-7891', '124 Elm Street', 2),
                                                                                         ('Bob', 'Johnson', 'bob.johnson@company.com', 'password123', '123-456-7892', '125 Elm Street', 2),
                                                                                         ('Alice', 'Brown', 'alice.brown@company.com', 'password123', '123-456-7893', '126 Elm Street', 2),
                                                                                         ('Charlie', 'Davis', 'charlie.davis@company.com', 'password123', '123-456-7894', '127 Elm Street', 2);

-- Insert Companies (assuming User IDs 1-5 for the CEOs)
INSERT INTO company (user_id, name) VALUES
                                        (1, 'Doe Enterprises'),
                                        (2, 'Smith Innovations'),
                                        (3, 'Johnson Solutions'),
                                        (4, 'Brown Technologies'),
                                        (5, 'Davis Ventures');

-- Insert Products (5 per company, 25 total)
INSERT INTO product (company_id, name, image, description, category, price) VALUES
                                                                                (1, 'Margherita Pizza', 'placeholder_base64', 'Classic margherita pizza with fresh basil.', 0, 8.99),
                                                                                (1, 'Pepperoni Feast', 'placeholder_base64', 'Loaded with spicy pepperoni and mozzarella.', 0, 10.99),
                                                                                (1, 'Veggie Supreme', 'placeholder_base64', 'A colorful mix of vegetables on a crispy base.', 0, 9.49),
                                                                                (1, 'BBQ Chicken Pizza', 'placeholder_base64', 'Savory BBQ sauce and grilled chicken.', 0, 11.49),
                                                                                (1, 'Four Cheese Delight', 'placeholder_base64', 'Melted blend of four rich cheeses.', 0, 10.49),
                                                                                (2, 'Classic Cheeseburger', 'placeholder_base64', 'Juicy beef patty with melted cheese.', 1, 7.99),
                                                                                (2, 'Bacon Double Burger', 'placeholder_base64', 'Double beef with crispy bacon.', 1, 9.99),
                                                                                (2, 'Veggie Burger', 'placeholder_base64', 'Healthy plant-based patty with fresh toppings.', 1, 8.49),
                                                                                (2, 'Spicy Jalapeno Burger', 'placeholder_base64', 'Kick of spice with jalapenos and pepper jack.', 1, 9.49),
                                                                                (2, 'Mushroom Swiss Burger', 'placeholder_base64', 'Earthy mushrooms and Swiss cheese.', 1, 8.99),
                                                                                (3, 'Classic Chicken Gyros', 'placeholder_base64', 'Tender chicken wrapped in soft pita.', 2, 7.49),
                                                                                (3, 'Beef Gyros Deluxe', 'placeholder_base64', 'Succulent beef slices with tzatziki.', 2, 8.49),
                                                                                (3, 'Falafel Gyros', 'placeholder_base64', 'Crispy falafel and fresh veggies.', 2, 7.99),
                                                                                (3, 'Spicy Lamb Gyros', 'placeholder_base64', 'Lamb gyros with a spicy twist.', 2, 9.49),
                                                                                (3, 'Mediterranean Gyros', 'placeholder_base64', 'Light and refreshing gyros option.', 2, 8.99),
                                                                                (4, 'Tropical Mango Juice', 'placeholder_base64', 'Refreshing mango juice blend.', 4, 4.49),
                                                                                (4, 'Berry Blast Shake', 'placeholder_base64', 'Creamy shake bursting with berries.', 5, 5.49),
                                                                                (4, 'Classic Cola', 'placeholder_base64', 'All-time favorite fizzy drink.', 6, 2.49),
                                                                                (4, 'Chocolate Milkshake', 'placeholder_base64', 'Rich chocolate flavor.', 5, 5.99),
                                                                                (4, 'Sparkling Orange Soda', 'placeholder_base64', 'Citrusy sparkling treat.', 6, 2.99),
                                                                                (5, 'Hotdog Classic', 'placeholder_base64', 'Grilled hotdog with ketchup and mustard.', 3, 5.49),
                                                                                (5, 'Chili Cheese Hotdog', 'placeholder_base64', 'Spicy chili and melted cheese.', 3, 6.49),
                                                                                (5, 'Lunch Combo Menu', 'placeholder_base64', 'Burger, fries, and drink combo.', 7, 11.99),
                                                                                (5, 'Family Feast Menu', 'placeholder_base64', 'A full meal for the whole family.', 7, 24.99),
                                                                                (5, 'Kids Menu', 'placeholder_base64', 'Smaller portions for the little ones.', 7, 7.99);

-- Insert Users (Couriers)
INSERT INTO user (first_name, last_name, email, password, phone, address, user_type) VALUES
                                                                                         ('Courier1', 'One', 'courier1@example.com', 'password123', '123-555-7890', 'Courier Address 1', 3),
                                                                                         ('Courier2', 'Two', 'courier2@example.com', 'password123', '123-555-7891', 'Courier Address 2', 3),
                                                                                         ('Courier3', 'Three', 'courier3@example.com', 'password123', '123-555-7892', 'Courier Address 3', 3);

-- Insert User (Admin)
INSERT INTO user (first_name, last_name, email, password, phone, address, user_type) VALUES
    ('Admin', 'User', 'admin@example.com', 'password123', '123-555-0000', 'Admin HQ', 0);