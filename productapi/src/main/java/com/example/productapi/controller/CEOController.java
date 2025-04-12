package com.example.productapi.controller;

import com.example.productapi.dto.CEODTO;
import com.example.productapi.service.CEOService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/streak/api/ceos")
public class CEOController {

    @Autowired
    CEOService ceoService;

    @GetMapping("/get")
    public List<CEODTO> getAllCEOs() {
        return ceoService.getCEOs();
    }

    @GetMapping("/get/{id}")
    public CEODTO getCEOById(@PathVariable long id) {
        return ceoService.getCEOById(id);
    }

    @PostMapping("/add")
    public ResponseEntity<CEODTO> addCEO(@RequestBody CEODTO ceo) {
        CEODTO created = ceoService.createCEO(ceo);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<CEODTO> updateCEO(@PathVariable long id, @RequestBody CEODTO ceo) {
        CEODTO updated = ceoService.updateCEO(id, ceo);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }
}
