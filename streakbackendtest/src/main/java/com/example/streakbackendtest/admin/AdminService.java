package com.example.streakbackendtest.admin;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    public List<Admin> getAdmins() {
        return List.of(
                new Admin(1L, "admin", "example@example.com", "example"),
                new Admin(2L, "admin2", "bela@gmail.com", "example2")
        );
    }
}
