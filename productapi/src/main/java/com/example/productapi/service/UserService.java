package com.example.productapi.service;

import com.example.productapi.converter.UserConverter;
import com.example.productapi.dto.UserDTO;
import com.example.productapi.model.User;
import com.example.productapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserDTO> getUsers() {
        return userRepository.findAll().stream().map(UserConverter::toDTO).collect(Collectors.toList());
    }

    public UserDTO getUserById(long id) {
        User user = userRepository.findById(id).orElseThrow(() ->new RuntimeException("User not found"));

        return UserConverter.toDTO(user);
    }

    public UserDTO createUser(UserDTO userDTO) {
        User user = UserConverter.toEntity(userDTO);
        User savedUser = userRepository.save(user);
        return UserConverter.toDTO(savedUser);
    }

    public UserDTO updateUser(long id, UserDTO userDTO) {
        User user = userRepository.findById(id).orElseThrow(() ->new RuntimeException("User not found"));
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setPhone(userDTO.getPhone());
        user.setAddress(userDTO.getAddress());
        user.setUserType(userDTO.getUserType());
        return UserConverter.toDTO(userRepository.save(user));
    }

    public void deleteUserById(long id) {
        if(!userRepository.existsById(id)) {
            throw new RuntimeException("User not found");
        }
        userRepository.deleteById(id);
    }
}
