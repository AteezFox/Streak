package com.example.streakbackendtest.companyceo;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/ceo")
public class CompanyCeoController {
    @GetMapping
    public List<CompanyCeo> getCompanyCeo() {
        return List.of(
                new CompanyCeo(1L, "example ceo", "example@email.com", "example", "+12345")
        );
    }
}
