package com.example.streakbackendtest.deliver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/deliver")
public class DeliverController {

    private final DeliverService deliverService;

    @Autowired
    public DeliverController(DeliverService deliverService) {
        this.deliverService = deliverService;
    }

    @GetMapping
    public List<Deliver> getDelivers() {
        return deliverService.getDelivers();
    }
}
