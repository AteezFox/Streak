package com.example.productapi.converter;

import com.example.productapi.dto.CompanyDTO;
import com.example.productapi.model.Company;

public class CompanyConverter {
    public static CompanyDTO toDTO(Company company) {
        CompanyDTO companyDTO = new CompanyDTO();
        companyDTO.setUserId(company.getUserId());
        companyDTO.setName(company.getName());
        return companyDTO;
    }

    public static Company toEntity(CompanyDTO companyDTO) {
        Company company = new Company();
        company.setUserId(companyDTO.getUserId());
        company.setName(companyDTO.getName());
        return company;
    }
}
