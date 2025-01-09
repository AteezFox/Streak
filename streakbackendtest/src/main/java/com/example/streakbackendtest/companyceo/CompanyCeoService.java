package com.example.streakbackendtest.companyceo;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyCeoService {
    public List<CompanyCeo> getCompanyCeos() {
        return List.of(
                new CompanyCeo(1L, "example ceo", "example@email.com", "example", "+12345")
        );
    }
}
