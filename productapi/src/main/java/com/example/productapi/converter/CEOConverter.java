package com.example.productapi.converter;

import com.example.productapi.dto.CEODTO;
import com.example.productapi.model.CEO;

public class CEOConverter {
    public static CEODTO toDTO(CEO ceo) {
        CEODTO ceoDTO = new CEODTO();
        ceoDTO.setFirstName(ceo.getFirstName());
        ceoDTO.setLastName(ceo.getLastName());
        ceoDTO.setEmail(ceo.getEmail());
        ceoDTO.setPassword(ceo.getPassword());
        ceoDTO.setPhone(ceo.getPhone());
        ceoDTO.setAddress(ceo.getAddress());
        return ceoDTO;
    }

    public static CEO toEntity(CEODTO ceoDTO) {
        CEO ceo = new CEO();
        ceo.setFirstName(ceoDTO.getFirstName());
        ceo.setLastName(ceoDTO.getLastName());
        ceo.setEmail(ceoDTO.getEmail());
        ceo.setPassword(ceoDTO.getPassword());
        ceo.setPhone(ceoDTO.getPhone());
        ceo.setAddress(ceoDTO.getAddress());
        return ceo;
    }
}
