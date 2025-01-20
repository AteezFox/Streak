create database if not exists streakfooddelivery;
use streakfooddelivery;

#admin eleje
create table if not exists admin
(
    admin_id BIGINT primary key auto_increment,
    admin_name varchar(50) not null,
    admin_email varbinary(100) UNIQUE not null,
    admin_username varchar(50) UNIQUE not null,
    admin_password varchar(50) UNIQUE not null
);
#admin vége

#product eleje
create table if not exists product
(
    product_id BIGINT primary key auto_increment,
    product_name varchar(50) not null,
    product_price decimal(10,2) not null,
    product_description varchar(100) not null,
    product_category varchar(50) not null,
    product_image varchar(100) not null #a termék képe
);
#product vége

#company eleje
create table if not exists company
(
    company_id BIGINT primary key auto_increment,
    company_name varchar(50) UNIQUE not null,
    company_zip int unique not null,
    company_address varchar(100) not null,
    company_housenumber int not null,
    company_city varchar(50) not null,
    company_logo varchar(100) not null, #a cég logójának a kép ide megy
    company_background varchar(100) not null, #azért hogy majd a cégre rámennek legyen ilyen kis fejléces kép
    product_id BIGINT not null,
    constraint fk_product_id
        foreign key (product_id) references product(product_id)
);
#company vége

#ceo eleje
create table if not exists ceo
(
    ceo_id BIGINT primary key auto_increment,
    ceo_name varchar(50) not null,
    ceo_email varbinary(100) UNIQUE not null,
    ceo_username varchar(50) UNIQUE not null,
    ceo_password varchar(50) UNIQUE not null,
    ceo_pfp varchar(100) not null, #pfp => profile picture
    company_id BIGINT not null,
    constraint fk_company_id
        foreign key (company_id) references company(company_id)
);
#ceo vége

#customer eleje
create table if not exists customer
(
    customer_id          BIGINT primary key auto_increment,
    customer_name        varchar(50)           not null,
    customer_email       varbinary(100) UNIQUE not null,
    customer_username    varchar(50) UNIQUE    not null,
    customer_password    varchar(50) UNIQUE    not null,
    customer_pfp         varchar(100)          not null, #pfp => profile picture
    customer_address     varchar(100)          not null,
    customer_housenumber int                   not null,
    customer_floor       int                   not null,
    customer_door        int                   not null,
    customer_city        varchar(50)           not null,
    customer_zip         int                   not null,
    customer_phone       varchar(20)           not null
);
#customer vége


#deliver eleje
create table if not exists deliver
(
    deliver_id BIGINT primary key auto_increment,
    deliver_name varchar(50) not null,
    deliver_email varbinary(100) UNIQUE not null,
    deliver_username varchar(50) UNIQUE not null,
    deliver_password varchar(50) UNIQUE not null,
    deliver_pfp varchar(100) not null,
    customer_id BIGINT not null,
    constraint fk_customer_id
        foreign key (customer_id) references customer(customer_id)
);
#deliver vége

#order eleje
create table if not exists `order`
(
    order_id BIGINT primary key auto_increment,
    order_date date not null,
    order_time time not null,
    order_status varchar(50) not null,
    order_total decimal(10,2) not null,
    customer_id BIGINT not null,
    product_id BIGINT not null,
    deliver_id BIGINT not null,
    constraint fk_order_customer_id
        foreign key (customer_id) references customer(customer_id),
    constraint fk_order_product_id
        foreign key (product_id) references product(product_id),
    constraint fk_order_deliver_id
        foreign key (deliver_id) references deliver(deliver_id)
);
#order vége