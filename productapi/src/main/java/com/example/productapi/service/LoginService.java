package com.example.productapi.service;

import com.example.productapi.dto.LoginDTO;
import com.example.productapi.model.User;
import com.example.productapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    public Long login(LoginDTO loginDTO) {
        User user = userRepository.findByEmail(loginDTO.getEmail()).orElseThrow(() -> new RuntimeException("User not found"));
        System.out.println(user);
        long toReturn;
        if (!user.getPassword().equals(loginDTO.getPassword())) {
            toReturn = 0L;
            throw new RuntimeException("Wrong password");
        }else {
            toReturn = user.getId();
        }
        return toReturn;

    }


}
