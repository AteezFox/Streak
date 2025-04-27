package com.example.productapi.controller;

import com.example.productapi.dto.UserDTO;
import com.example.productapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/streak/api/users")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/get")
    public List<UserDTO> getAllUsers() {
        return userService.getUsers();
    }

    @GetMapping("/get/{id}")
    public UserDTO getUserById(@PathVariable long id) {
        return userService.getUserById(id);
    }

    @GetMapping("/get/admins")
    public List<UserDTO> getAllAdmins() {return userService.getUserByType_ADMIN();}

    @GetMapping("get/users")
    public List<UserDTO> getAllUsersByUserType_USER() {
        return userService.getUserByType_USER();
    }

    @GetMapping("/get/ceos")
    public List<UserDTO> getAllUsersByUserType_CEO() {
        return userService.getUserByUserType_CEO();
    }

    @GetMapping("/get/couriers")
    public List<UserDTO> getAllUsersByUserType_COURIER() {
        return userService.getUserByUserType_COURIER();
    }

    @PostMapping("/add")
    public ResponseEntity<UserDTO> addUser(@RequestBody UserDTO userDTO) {
        UserDTO created = userService.createUser(userDTO);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable long id, @RequestBody UserDTO userDTO) {
        UserDTO updated = userService.updateUser(id, userDTO);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable long id) {
        userService.deleteUserById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
