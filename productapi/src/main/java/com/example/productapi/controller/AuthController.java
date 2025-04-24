package com.example.productapi.controller;

import com.example.productapi.converter.UserConverter;
import com.example.productapi.dto.LoginRequest;
import com.example.productapi.dto.LoginResponse;
import com.example.productapi.dto.UserDTO;
import com.example.productapi.functions.FUNCTIONS;
import com.example.productapi.model.User;
import com.example.productapi.repository.UserRepository;
import com.example.productapi.service.UserService;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/streak/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Optional<User> optionalUser = userRepository.findByEmail(loginRequest.getEmail());

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (loginRequest.getPassword().equals(FUNCTIONS.DO().DECRYPT.THIS(user.getPassword()))) {
                return ResponseEntity.ok(new LoginResponse(user.getId(), "Login successful"));
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body("Invalid email or password");
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDTO userRequest) {
        Optional<User> optionalUser = userRepository.findByEmail(userRequest.getEmail());

        if (optionalUser.isEmpty()) {
            User savedUser = UserConverter.toEntity(userService.createUser(userRequest));
            return ResponseEntity.ok(new LoginResponse(savedUser.getId(), "Register successful"));
        }
        return ResponseEntity.badRequest().body("Email already in use");
    }


}
