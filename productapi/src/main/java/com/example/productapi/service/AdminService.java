package com.example.productapi.service;

import com.example.productapi.converter.AdminConverter;
import com.example.productapi.dto.AdminDTO;
import com.example.productapi.model.Admin;
import com.example.productapi.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public List<AdminDTO> getAdmins() {
        return adminRepository.findAll().stream().map(AdminConverter::toDTO).collect(Collectors.toList());
    }

    public AdminDTO getAdminById(long id) {
        Admin admin = adminRepository.findById(id).orElseThrow(() -> new RuntimeException("Admin not found"));

        return AdminConverter.toDTO(admin);
    }

    public AdminDTO createAdmin(AdminDTO adminDTO) {
        Admin admin = AdminConverter.toEntity(adminDTO);
        Admin savedAdmin = adminRepository.save(admin);
        return AdminConverter.toDTO(savedAdmin);
    }

    public AdminDTO updateAdmin(long id, AdminDTO adminDTO) {
        Admin admin = adminRepository.findById(id).orElseThrow(() -> new RuntimeException("Admin not found"));
        Admin updatedAdmin = AdminConverter.toEntity(adminDTO);
        adminRepository.save(updatedAdmin);
        return AdminConverter.toDTO(admin);
    }

    public void deleteAdminById(long id) {
        if (!adminRepository.existsById(id)) {
            throw new RuntimeException("Admin not found");
        }
        adminRepository.deleteById(id);
    }
}
