package com.example.productapi.controller;

import com.example.productapi.dto.LoginDTO;
import com.example.productapi.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/streak/api/login")
public class LoginController {

    @Autowired
    LoginService loginService;

    @GetMapping
    public ResponseEntity<Long> login(@RequestBody LoginDTO loginDTO) {
        Long identifier = loginService.login(loginDTO);
        return new ResponseEntity<>(identifier, HttpStatus.OK);
    }


}
