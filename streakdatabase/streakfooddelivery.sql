CREATE DATABASE IF NOT EXISTS streakdelivery;
USE streakdelivery;

-- User table
CREATE TABLE IF NOT EXISTS User (
    user_id bigint auto_increment PRIMARY KEY not null,
    user_firstname VARCHAR(50) NOT NULL,
    user_lastname VARCHAR(50) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    user_phone VARCHAR(50) NOT NULL,
    INDEX (user_email)
);

-- Login table
CREATE TABLE IF NOT EXISTS Login (
    login_id bigint auto_increment PRIMARY KEY,
    login_email VARCHAR(255) NOT NULL UNIQUE,
    login_password VARCHAR(255) NOT NULL,
    INDEX (login_email)
);

-- Register table
CREATE TABLE IF NOT EXISTS Register (
    register_id bigint auto_increment PRIMARY KEY not null,
    register_date DATE NOT NULL DEFAULT CURRENT_DATE,
    register_firstname VARCHAR(50) NOT NULL,
    register_lastname VARCHAR(50) NOT NULL,
    register_email VARCHAR(255) NOT NULL UNIQUE,
    register_password VARCHAR(255) NOT NULL,
    register_phone VARCHAR(50) NOT NULL,
    register_status BOOLEAN NOT NULL DEFAULT TRUE,
    user_id bigint NOT NULL,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE,
    INDEX (register_email)
);

-- Address table
CREATE TABLE IF NOT EXISTS Address (
    address_id bigint auto_increment PRIMARY KEY not null,
    address_street VARCHAR(255) NOT NULL,
    address_city VARCHAR(50) NOT NULL,
    address_housenumber VARCHAR(50) NOT NULL,
    address_zip VARCHAR(50) NOT NULL,
    address_floor VARCHAR(50),
    address_door VARCHAR(50),
    address_phone VARCHAR(50) NOT NULL,
    address_otherinfo TEXT,
    address_user_id bigint NOT NULL,
    CONSTRAINT fk_address_user_id FOREIGN KEY (address_user_id) REFERENCES User(user_id) ON DELETE CASCADE,
    INDEX (address_city)
);

-- Ceo table
CREATE TABLE IF NOT EXISTS Ceo (
    ceo_id bigint auto_increment PRIMARY KEY not null,
    ceo_firstname VARCHAR(50) NOT NULL,
    ceo_lastname VARCHAR(50) NOT NULL,
    ceo_email VARCHAR(255) NOT NULL UNIQUE,
    ceo_password VARCHAR(255) NOT NULL,
    INDEX (ceo_email)
);

-- Company table
CREATE TABLE IF NOT EXISTS Company (
    company_id bigint auto_increment PRIMARY KEY not null,
    company_name VARCHAR(50) NOT NULL,
    ceo_id bigint NOT NULL,
    CONSTRAINT fk_ceo_id FOREIGN KEY (ceo_id) REFERENCES Ceo(ceo_id) ON DELETE CASCADE,
    INDEX (company_name)
);

-- Product table
CREATE TABLE IF NOT EXISTS Product (
    product_id bigint auto_increment PRIMARY KEY not null,
    product_name VARCHAR(50) NOT NULL,
    product_price DECIMAL(10, 2) NOT NULL,
    product_description TEXT NOT NULL,
    product_image VARCHAR(255) NOT NULL,
    product_amount INT NOT NULL,
    company_id bigint NOT NULL,
    CONSTRAINT fk_company_id FOREIGN KEY (company_id) REFERENCES Company(company_id) ON DELETE CASCADE,
    INDEX (product_name)
);

-- Courier table
CREATE TABLE IF NOT EXISTS Courier (
    courier_id bigint auto_increment PRIMARY KEY not null,
    courier_firstname VARCHAR(50) NOT NULL,
    courier_lastname VARCHAR(50) NOT NULL,
    courier_email VARCHAR(255) NOT NULL UNIQUE,
    courier_password VARCHAR(255) NOT NULL,
    INDEX (courier_email)
);

-- Admin table
CREATE TABLE IF NOT EXISTS Admin (
    admin_id bigint auto_increment PRIMARY KEY not null,
    admin_firstname VARCHAR(50) NOT NULL,
    admin_lastname VARCHAR(50) NOT NULL,
    admin_email VARCHAR(255) NOT NULL UNIQUE,
    admin_password VARCHAR(255) NOT NULL,
    INDEX (admin_email)
);

-- OrderStatus table
CREATE TABLE IF NOT EXISTS OrderStatus (
    orderstatus_id bigint auto_increment PRIMARY KEY not null,
    orderstatus_name VARCHAR(50) NOT NULL,
    CHECK (orderstatus_name IN ('pending', 'accepted', 'on the way', 'delivered', 'cancelled')),
    INDEX (orderstatus_name)
);

-- UserOrder table
CREATE TABLE IF NOT EXISTS UserOrder (
    order_id bigint auto_increment PRIMARY KEY not null,
    order_date DATE NOT NULL,
    order_total DECIMAL(10, 2) NOT NULL,
    order_user_id bigint NOT NULL,
    address_id bigint NOT NULL,
    orderstatus_id bigint NOT NULL,
    CONSTRAINT fk_order_user FOREIGN KEY (order_user_id) REFERENCES User(user_id) ON DELETE CASCADE,
    CONSTRAINT fk_order_address FOREIGN KEY (address_id) REFERENCES Address(address_id) ON DELETE CASCADE,
    CONSTRAINT fk_order_status FOREIGN KEY (orderstatus_id) REFERENCES OrderStatus(orderstatus_id) ON DELETE CASCADE,
    INDEX (order_date)
);

-- OrderProduct table
CREATE TABLE IF NOT EXISTS OrderProduct (
    order_id bigint NOT NULL,
    product_id bigint NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (order_id, product_id),
    CONSTRAINT fk_order_id FOREIGN KEY (order_id) REFERENCES UserOrder(order_id) ON DELETE CASCADE,
    CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES Product(product_id) ON DELETE CASCADE,
    INDEX (order_id),
    INDEX (product_id)
);

-- CourierOrder table
CREATE TABLE IF NOT EXISTS CourierOrder (
    courier_id bigint NOT NULL,
    courier_order_id bigint NOT NULL,
    CONSTRAINT fk_courier_id FOREIGN KEY (courier_id) REFERENCES Courier(courier_id) ON DELETE CASCADE,
    CONSTRAINT fk_courier_order_id FOREIGN KEY (courier_order_id) REFERENCES UserOrder(order_id) ON DELETE CASCADE,
    INDEX (courier_id),
    INDEX (courier_order_id)
);