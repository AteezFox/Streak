package com.example.productapi.converter;

import com.example.productapi.model.Courier;
import com.example.productapi.dto.CourierDTO;

public class CourierConverter {

    public static CourierDTO toDTO(Courier courier) {
        CourierDTO dto = new CourierDTO();
        dto.setFirstName(courier.getFirstName());
        dto.setLastName(courier.getLastName());
        dto.setEmail(courier.getEmail());
        dto.setPassword(courier.getPassword());
        dto.setAddress(courier.getAddress() != null ? courier.getAddress().toString() : null);
        return dto;
    }

    public static Courier toEntity(CourierDTO dto) {
        Courier courier = new Courier();
        courier.setFirstName(dto.getFirstName());
        courier.setLastName(dto.getLastName());
        courier.setEmail(dto.getEmail());
        courier.setPassword(dto.getPassword());
        // You would need to handle the address association here
        return courier;
    }
}
