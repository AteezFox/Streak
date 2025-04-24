package com.example.productapi.converter;

import com.example.productapi.dto.UserDTO;
import com.example.productapi.functions.FUNCTIONS;
import com.example.productapi.model.User;

public class UserConverter {
    public static UserDTO toDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setEmail(user.getEmail());
        userDTO.setPassword(FUNCTIONS.DO().DECRYPT.THIS(user.getPassword()));
        userDTO.setPhone(user.getPhone());
        userDTO.setAddress(user.getAddress());
        userDTO.setUserType(user.getUserType());
        return userDTO;
    }

    public static User toEntity(UserDTO userDTO) {
        User user = new User();
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(FUNCTIONS.DO().ENCRYPT.THIS(userDTO.getPassword()));
        user.setPhone(userDTO.getPhone());
        user.setAddress(userDTO.getAddress());
        user.setUserType(userDTO.getUserType());
        return user;
    }
}
