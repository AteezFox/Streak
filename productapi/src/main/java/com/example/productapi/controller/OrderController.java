package com.example.productapi.controller;

import com.example.productapi.dto.OrderDTO;
import com.example.productapi.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/streak/api/orders")
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping("/get")
    public List<OrderDTO> getAllOrders() {
        return orderService.getOrders();
    }

    @GetMapping("/get/{id}")
    public OrderDTO getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id);
    }

    @GetMapping("get/avaliable")
    public List<OrderDTO> getOrdersIfAvaliable() {
        return orderService.getAvaliableOrders();
    }

    @PostMapping("/add")
    public ResponseEntity<OrderDTO> addOrder(@RequestBody OrderDTO orderDTO) {
        OrderDTO created = orderService.createOrder(orderDTO);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }
}
