package com.example.productapi.dto;

import com.example.productapi.enums.OrderState;
import jakarta.persistence.ElementCollection;
import lombok.*;

import java.util.List;

@Getter
@Setter
public class OrderDTO {

    private Long id;

    @ElementCollection
    private List<Long> productIds;

    private Double totalPrice;

    private OrderState state;

    public OrderDTO() {}

    public OrderDTO(List<Long> productIds, Double totalPrice, OrderState state) {
        this.productIds = productIds;
        this.totalPrice = totalPrice;
        this.state = state;
    }

    public OrderDTO(Long id, List<Long> productIds, Double totalPrice, OrderState state) {
        this.id = id;
        this.productIds = productIds;
        this.totalPrice = totalPrice;
        this.state = state;
    }
}
