package com.example.productapi.model;

import com.example.productapi.enums.OrderState;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
public class UserOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    private List<Long> productIds;

    private Double totalPrice;

    private OrderState state;

    public UserOrder() {
    }

    public UserOrder(List<Long> productIds, Double totalPrice, OrderState state) {
        this.productIds = productIds;
        this.totalPrice = totalPrice;
        this.state = state;
    }
}
