package com.example.productapi.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany
    private List<Product> products;

    private String date;

    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    private int sumToPay;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public int getSumToPay() {
        return sumToPay;
    }

    public void setSumToPay(int sumToPay) {
        this.sumToPay = sumToPay;
    }
}
