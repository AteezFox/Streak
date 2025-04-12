package com.example.productapi.service;

import com.example.productapi.converter.CEOConverter;
import com.example.productapi.dto.CEODTO;
import com.example.productapi.model.CEO;
import com.example.productapi.repository.CEORepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CEOService {

    @Autowired
    private CEORepository ceoRepository;

    public List<CEODTO> getCEOs() {
        return ceoRepository.findAll().stream().map(CEOConverter::toDTO).collect(Collectors.toList());
    }

    public CEODTO getCEOById(long id) {
        CEO ceo = ceoRepository.findById(id).orElseThrow(() -> new RuntimeException("CEO not found"));
        return CEOConverter.toDTO(ceo);
    }

    public CEODTO createCEO(CEODTO ceoDTO) {
        CEO ceo = CEOConverter.toEntity(ceoDTO);
        CEO savedCEO = ceoRepository.save(ceo);
        return CEOConverter.toDTO(savedCEO);
    }

    public CEODTO updateCEO(long id, CEODTO ceoDTO) {
        CEO ceo = ceoRepository.findById(id).orElseThrow(() -> new RuntimeException("CEO not found"));
        ceo.setFirstName(ceoDTO.getFirstName());
        ceo.setLastName(ceoDTO.getLastName());
        ceo.setEmail(ceoDTO.getEmail());
        ceo.setPassword(ceoDTO.getPassword());
        ceo.setPhone(ceoDTO.getPhone());
        ceo.setAddress(ceoDTO.getAddress());
        return CEOConverter.toDTO(ceoRepository.save(ceo));
    }
    public void deleteCEOById(long id) {
        if(!ceoRepository.existsById(id)) {
            throw new RuntimeException("CEO not found");
        }
        ceoRepository.deleteById(id);
    }
}
