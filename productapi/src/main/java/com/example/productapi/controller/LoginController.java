package com.example.productapi.controller;

import com.example.productapi.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController("/streak/api/login")
public class LoginController {

    @Autowired
    LoginService loginService;


}
