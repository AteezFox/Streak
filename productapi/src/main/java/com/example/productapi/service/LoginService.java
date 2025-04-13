package com.example.productapi.service;

import com.example.productapi.repository.AdminRepository;
import com.example.productapi.repository.CEORepository;
import com.example.productapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private CEORepository ceoRepository;


}
