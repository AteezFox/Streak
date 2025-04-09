package com.example.productapi.service;

import com.example.productapi.model.CEO;
import com.example.productapi.repository.CEORepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CEOService {

    @Autowired
    private CEORepository ceoRepository;

    public CEO createCEO(CEO ceo) {
        return ceoRepository.save(ceo);
    }

    public List<CEO> getAllCEOs() {
        return ceoRepository.findAll();
    }

    public Optional<CEO> getCEOById(Long id) {
        return ceoRepository.findById(id);
    }

    public CEO updateCEO(Long id, CEO ceo) {
        ceo.setId(id);
        return ceoRepository.save(ceo);
    }

    public void deleteCEO(Long id) {
        ceoRepository.deleteById(id);
    }
}
