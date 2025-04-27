package com.example.productapi.converter;

import com.example.productapi.dto.OrderDTO;
import com.example.productapi.model.UserOrder;

public class OrderConverter {

    public static OrderDTO toDTO(UserOrder userOrder) {
        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setId(userOrder.getId());
        orderDTO.setProductIds(userOrder.getProductIds());
        orderDTO.setTotalPrice(userOrder.getTotalPrice());
        orderDTO.setState(userOrder.getState());
        return orderDTO;
    }

    public static UserOrder toEntity(OrderDTO orderDTO) {
        UserOrder userOrder = new UserOrder();
        userOrder.setId(orderDTO.getId());
        userOrder.setProductIds(orderDTO.getProductIds());
        userOrder.setTotalPrice(orderDTO.getTotalPrice());
        userOrder.setState(orderDTO.getState());
        return userOrder;
    }
}
