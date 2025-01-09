package com.example.streakbackendtest.company;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {
    public List<Company> getCompanies() {
        return List.of(
                new Company(1L, "company", "city", "address", 1, 1),
                new Company(2L, "company2", "city2", "address2", 2, 2)
        );
    }
}
