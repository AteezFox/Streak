package com.example.productapi.converter;

import com.example.productapi.model.Order;
import com.example.productapi.dto.OrderDTO;
import com.example.productapi.model.OrderStatus;

public class OrderConverter {

    public static OrderDTO toDTO(Order order) {
        OrderDTO dto = new OrderDTO();
        dto.setProductIds(order.getProducts().stream().map(product -> product.getId()).toList());
        dto.setDate(order.getDate());
        dto.setStatus(order.getStatus().name());
        dto.setSumToPay(order.getSumToPay());
        return dto;
    }

    public static Order toEntity(OrderDTO dto) {
        Order order = new Order();
        // You would need to handle the product association here
        order.setDate(dto.getDate());
        order.setStatus(OrderStatus.valueOf(dto.getStatus()));
        order.setSumToPay(dto.getSumToPay());
        return order;
    }
}
