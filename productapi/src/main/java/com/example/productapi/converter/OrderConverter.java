package com.example.productapi.converter;

import com.example.productapi.dto.OrderDTO;
import com.example.productapi.model.Order;

public class OrderConverter {

    public static OrderDTO toDTO(Order order) {
        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setId(order.getId());
        orderDTO.setProductIds(order.getProductIds());
        orderDTO.setTotalPrice(order.getTotalPrice());
        orderDTO.setState(order.getState());
        return orderDTO;
    }

    public static Order toEntity(OrderDTO orderDTO) {
        Order order = new Order();
        order.setId(orderDTO.getId());
        order.setProductIds(orderDTO.getProductIds());
        order.setTotalPrice(orderDTO.getTotalPrice());
        order.setState(orderDTO.getState());
        return order;
    }
}
