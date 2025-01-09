package com.example.streakbackendtest.companyceo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/ceo")
public class CompanyCeoController {

    private final CompanyCeoService companyCeoService;

    @Autowired
    public CompanyCeoController(CompanyCeoService companyCeoService) {
        this.companyCeoService = companyCeoService;
    }

    @GetMapping
    public List<CompanyCeo> getCompanyCeo() {
        return companyCeoService.getCompanyCeos();
    }
}
