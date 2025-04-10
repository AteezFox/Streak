create table address (id bigint not null auto_increment, city varchar(255), country varchar(255), state varchar(255), street varchar(255), zip_code varchar(255), primary key (id)) engine=InnoDB;
create table company (address_id bigint, ceo_id bigint, id bigint not null auto_increment, name varchar(255), primary key (id)) engine=InnoDB;
create table order (sum_to_pay integer not null, id bigint not null auto_increment, date varchar(255), status enum ('DELIVERED','PENDING','SHIPPED'), primary key (id)) engine=InnoDB;
create table order_products (order_id bigint not null, products_id bigint not null) engine=InnoDB;
create table product (price integer not null, company_id bigint, id bigint not null auto_increment, image varchar(255), name varchar(255), category enum ('CLOTHING','ELECTRONICS','FOOD','FURNITURE'), primary key (id)) engine=InnoDB;
create table user (address_id bigint, id bigint not null auto_increment, dtype varchar(31) not null, email varchar(255), first_name varchar(255), last_name varchar(255), password varchar(255), primary key (id)) engine=InnoDB;
create table user_addresses (addresses_id bigint not null, user_id bigint not null) engine=InnoDB;
alter table company add constraint UKh2rewspdf9bnwpbt1nauwiaww unique (address_id);
alter table company add constraint UKmtq94c0rl5y1eeua9sxo8poqm unique (ceo_id);
alter table user add constraint UKdhlcfg8h1drrgu0irs1ro3ohb unique (address_id);
alter table user_addresses add constraint UKi5lp1fvgfvsplfqwu4ovwpnxs unique (addresses_id);
alter table company add constraint FKgfifm4874ce6mecwj54wdb3ma foreign key (address_id) references address (id);
alter table company add constraint FKianpbnmo518p7n9u1255015r8 foreign key (ceo_id) references user (id);
alter table order_products add constraint FKbdt2qu1a0lpd3skrrc5t97d6j foreign key (products_id) references product (id);
alter table order_products add constraint FKoqpgoc81npyup5ma3idjwj0xo foreign key (order_id) references order (id);
alter table product add constraint FKghawd5rtv8ok565nwpdyyuto9 foreign key (company_id) references company (id);
alter table user add constraint FKddefmvbrws3hvl5t0hnnsv8ox foreign key (address_id) references address (id);
alter table user_addresses add constraint FKth1icmttmhhorb9wiarm73i06 foreign key (addresses_id) references address (id);
alter table user_addresses add constraint FKfm6x520mag23hvgr1oshaut8b foreign key (user_id) references user (id);
create table address (id bigint not null auto_increment, city varchar(255), country varchar(255), state varchar(255), street varchar(255), zip_code varchar(255), primary key (id)) engine=InnoDB;
create table company (address_id bigint, ceo_id bigint, id bigint not null auto_increment, name varchar(255), primary key (id)) engine=InnoDB;
create table order (sum_to_pay integer not null, id bigint not null auto_increment, date varchar(255), status enum ('DELIVERED','PENDING','SHIPPED'), primary key (id)) engine=InnoDB;
create table order_products (order_id bigint not null, products_id bigint not null) engine=InnoDB;
create table product (price integer not null, company_id bigint, id bigint not null auto_increment, image varchar(255), name varchar(255), category enum ('CLOTHING','ELECTRONICS','FOOD','FURNITURE'), primary key (id)) engine=InnoDB;
create table user (address_id bigint, id bigint not null auto_increment, dtype varchar(31) not null, email varchar(255), first_name varchar(255), last_name varchar(255), password varchar(255), primary key (id)) engine=InnoDB;
create table user_addresses (addresses_id bigint not null, user_id bigint not null) engine=InnoDB;
alter table company add constraint UKh2rewspdf9bnwpbt1nauwiaww unique (address_id);
alter table company add constraint UKmtq94c0rl5y1eeua9sxo8poqm unique (ceo_id);
alter table user add constraint UKdhlcfg8h1drrgu0irs1ro3ohb unique (address_id);
alter table user_addresses add constraint UKi5lp1fvgfvsplfqwu4ovwpnxs unique (addresses_id);
alter table company add constraint FKgfifm4874ce6mecwj54wdb3ma foreign key (address_id) references address (id);
alter table company add constraint FKianpbnmo518p7n9u1255015r8 foreign key (ceo_id) references user (id);
alter table order_products add constraint FKbdt2qu1a0lpd3skrrc5t97d6j foreign key (products_id) references product (id);
alter table order_products add constraint FKoqpgoc81npyup5ma3idjwj0xo foreign key (order_id) references order (id);
alter table product add constraint FKghawd5rtv8ok565nwpdyyuto9 foreign key (company_id) references company (id);
alter table user add constraint FKddefmvbrws3hvl5t0hnnsv8ox foreign key (address_id) references address (id);
alter table user_addresses add constraint FKth1icmttmhhorb9wiarm73i06 foreign key (addresses_id) references address (id);
alter table user_addresses add constraint FKfm6x520mag23hvgr1oshaut8b foreign key (user_id) references user (id);
