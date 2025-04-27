package com.example.productapi.converter;

import com.example.productapi.dto.UserDTO;
import com.example.productapi.dto.UserRequestDTO;
import com.example.productapi.dto.UserResponseDTO;
import com.example.productapi.model.User;

public class UserConverter {
    public static UserResponseDTO toResponseDTO(User user) {
        UserResponseDTO dto = new UserResponseDTO();
        dto.setId(user.getId());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setEmail(user.getEmail());
        dto.setUserType(user.getUserType());
        return dto;
    }

    public static User toEntity(UserRequestDTO userRequestDTO) {
        User user = new User();
        user.setFirstName(userRequestDTO.getFirstName());
        user.setLastName(userRequestDTO.getLastName());
        user.setEmail(userRequestDTO.getEmail());
        user.setPassword(userRequestDTO.getPassword());
        user.setUserType(userRequestDTO.getUserType());
        return user;
    }

}
