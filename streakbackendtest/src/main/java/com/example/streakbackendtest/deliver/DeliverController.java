package com.example.streakbackendtest.deliver;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/deliver")
public class DeliverController {

    @GetMapping
    public List<Deliver> getAdmins() {
        return List.of(
                new Deliver(1L,"example name", "example@example.com", "example", "+12345")
        );
    }
}
