package com.example.streakbackendtest.admin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/admin")
public class AdminController {

    @GetMapping
    public List<Admin> getAdmins() {
        return List.of(
                new Admin(1L, "admin", "example@example.com", "example"),
                new Admin(2L, "admin2", "bela@gmail.com", "example2")
        );
    }
}
