package com.example.streakbackendtest.deliver;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliverService {
    public List<Deliver> getDelivers() {
        return List.of(
                new Deliver(1L,"example name", "example@example.com", "example", "+12345")
        );
    }
}
