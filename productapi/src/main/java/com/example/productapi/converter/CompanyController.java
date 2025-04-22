package com.example.productapi.converter;

import com.example.productapi.dto.CompanyDTO;
import com.example.productapi.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/streak/api/companies")
public class CompanyController {

    @Autowired
    CompanyService companyService;

    @GetMapping("/get")
    public List<CompanyDTO> getAllCompanies() {
        return companyService.getAllCompanies();
    }

    @GetMapping("/get/{id}")
    public CompanyDTO getCompanyById(@PathVariable Long id){
        return companyService.getCompanyById(id);
    }

    @GetMapping("/get/ceo/{id}")
    public CompanyDTO getCompanyByCEO(@PathVariable Long ceoID){
        return companyService.getByCEOID(ceoID);
    }

    @PostMapping("/add")
    public ResponseEntity<CompanyDTO> addCompany(@RequestBody CompanyDTO companyDTO){
        CompanyDTO created = companyService.createCompany(companyDTO);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<CompanyDTO> updateCompany(@PathVariable Long id, @RequestBody CompanyDTO companyDTO){
        CompanyDTO updated = companyService.updateCompany(id, companyDTO);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteCompany(@PathVariable Long id){
        companyService.deleteCompanyById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
