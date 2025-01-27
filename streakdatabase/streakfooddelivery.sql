create database if not exists streakfooddelivery;
use streakfooddelivery;

CREATE TABLE IF NOT EXISTS admin (
    admin_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    admin_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    admin_pfp varchar(255) NOT NULL -- pfp => profile picture
);

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
    company_name varchar(50) not null,
    company_added date default now() not null,
    company_created date not null,
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
    email varchar(100) UNIQUE not null,
    username varchar(50) UNIQUE not null,
    password varchar(255) not null,
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
    customer_name        varchar(50)                    not null,
    email       varchar(100) UNIQUE            not null,
    username    varchar(50) UNIQUE             not null,
    password    varchar(255)                   not null,
    customer_birthdate   date                  not null,
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


#courier eleje
create table if not exists courier
(
    courier_id BIGINT primary key auto_increment,
    courier_name varchar(50) not null,
    email varchar(100) UNIQUE not null,
    username varchar(50) UNIQUE not null,
    password varchar(255) not null,
    courier_pfp varchar(100) not null #pfp => profile picture
);
#courier vége

#order eleje
create table if not exists `order`
(
    order_id BIGINT primary key auto_increment,
    ordered_at timestamp default now(),
    order_status varchar(50) not null,
    order_total decimal(10,2) not null,
    customer_id BIGINT not null,
    product_id BIGINT not null,
    courier_id BIGINT not null,
    constraint fk_order_customer_id
        foreign key (customer_id) references customer(customer_id),
    constraint fk_order_product_id
        foreign key (product_id) references product(product_id),
    constraint fk_order_courier_id
        foreign key (courier_id) references courier(courier_id)
);
#order vége

#registration eleje
create table if not exists registration
(
    registration_id BIGINT primary key auto_increment,
    registration_date timestamp default now(),
    isactive boolean default true
);

alter table customer
    add column registration_id BIGINT not null,
    add constraint fk_registration_id
        foreign key (registration_id) references registration(registration_id);
#registration vége

#userlogin eleje
create table if not exists userlogin
(
    userlogin_id BIGINT primary key auto_increment,
    login_date timestamp default now(),
    login_status boolean default true,
    customer_id BIGINT not null,
    admin_id BIGINT not null,
    courier_id BIGINT not null,
    ceo_id BIGINT not null,
    constraint fk_userlogin_courier_id
        foreign key (courier_id) references courier(courier_id),
    constraint fk_userlogin_admin_id
        foreign key (admin_id) references admin(admin_id),
    constraint fk_userlogin_customer_id
        foreign key (customer_id) references customer(customer_id),
    constraint fk_userlogin_ceo_id
        foreign key (ceo_id) references ceo(ceo_id)
);
#userlogin vége

#customer "view"-ok eleje
create view if not exists customer_registration as
select
    c.customer_id,
    c.customer_name,
    c.email,
    c.username,
    c.password,
    c.customer_birthdate,
    c.customer_phone,
    r.registration_id,
    r.registration_date,
    r.isactive
from customer c
join registration r on c.registration_id = r.registration_id;

create view if not exists customer_order as
select
    c.customer_id,
    c.customer_name,
    c.email,
    c.username,
    c.customer_address,
    c.customer_housenumber,
    c.customer_floor,
    c.customer_door,
    c.customer_city,
    c.customer_zip,
    c.customer_phone,
    o.order_id,
    o.ordered_at,
    o.order_status,
    o.order_total
from customer c
join `order` o on c.customer_id = o.customer_id;

create view if not exists customer_order_product as
select
    c.customer_id,
    c.customer_name,
    c.email,
    c.username,
    o.order_id,
    o.ordered_at,
    o.order_status,
    o.order_total,
    p.product_id,
    p.product_name,
    p.product_price,
    p.product_image
from customer c
join `order` o on c.customer_id = o.customer_id
join product p on o.product_id = p.product_id;

create view if not exists customer_userlogin as
select
    c.customer_id,
    c.customer_name,
    c.email,
    c.username,
    u.login_date,
    u.login_status
from customer c
join userlogin u on c.customer_id = u.customer_id;
#customer "view"-ok vége

#courier "view"-ok eleje
create view if not exists courier_order as
select
    c.courier_id,
    c.courier_name,
    c.username,
    c.email,
    o.order_id,
    o.ordered_at,
    o.order_status,
    o.order_total
from courier c
join `order` o on c.courier_id = o.courier_id;

create view if not exists courier_order_customer as
select
    c.courier_id,
    c.courier_name,
    o.order_id,
    o.ordered_at,
    o.order_status,
    o.order_total,
    cu.customer_id,
    cu.customer_name,
    cu.customer_address,
    cu.customer_housenumber,
    cu.customer_floor,
    cu.customer_door,
    cu.customer_city,
    cu.customer_zip,
    cu.customer_phone
from courier c
join `order` o on c.courier_id = o.courier_id
join customer cu on o.customer_id = cu.customer_id;

create view if not exists courier_order_product as
select
    c.courier_id,
    c.courier_name,
    c.username,
    c.email,
    o.order_id,
    o.ordered_at,
    o.order_status,
    o.order_total,
    p.product_id,
    p.product_name,
    p.product_price,
    p.product_image
from courier c
join `order` o on c.courier_id = o.courier_id
join product p on o.product_id = p.product_id;

create view if not exists courier_userlogin as
select
    c.courier_id,
    c.courier_name,
    c.email,
    c.username,
    u.login_date,
    u.login_status
from courier c
join userlogin u on c.courier_id = u.courier_id;
#courier "view"-ok vége

#admin "view"-ok eleje
create view if not exists admin_userlogin as
select
    a.admin_id,
    a.admin_name,
    a.email,
    a.username,
    u.login_date,
    u.login_status
from admin a
join userlogin u on a.admin_id = u.admin_id;
#admin "view"-ok vége

#ceo "view"-ok eleje
create view if not exists ceo_company as
select
    ceo_id,
    c.ceo_name,
    c.email,
    c.username,
    c.company_id,
    co.company_name
from ceo c
join company co on c.company_id = co.company_id;

create view if not exists ceo_userlogin as
select
    c.ceo_id,
    c.ceo_name,
    c.email,
    c.username,
    u.login_date,
    u.login_status
from ceo c
join userlogin u on c.ceo_id = u.ceo_id;
#ceo "view"-ok vége