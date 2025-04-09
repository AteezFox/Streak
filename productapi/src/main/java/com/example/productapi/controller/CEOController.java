package com.example.productapi.controller;

import com.example.productapi.model.CEO;
import com.example.productapi.service.CEOService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/streak/ceos")
public class CEOController {

    @Autowired
    private CEOService ceoService;

    @PostMapping
    public CEO createCEO(@RequestBody CEO ceo) {
        return ceoService.createCEO(ceo);
    }

    @GetMapping
    public List<CEO> getAllCEOs() {
        return ceoService.getAllCEOs();
    }

    @GetMapping("/{id}")
    public Optional<CEO> getCEOById(@PathVariable Long id) {
        return ceoService.getCEOById(id);
    }

    @PutMapping("/{id}")
    public CEO updateCEO(@PathVariable Long id, @RequestBody CEO ceo) {
        return ceoService.updateCEO(id, ceo);
    }

    @DeleteMapping("/{id}")
    public void deleteCEO(@PathVariable Long id) {
        ceoService.deleteCEO(id);
    }
}
