package com.example.productapi.controller;

import com.example.productapi.dto.AdminDTO;
import com.example.productapi.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/streak/api/admins")
public class AdminController {
    @Autowired
    AdminService adminService;

    @GetMapping("/get")
    public List<AdminDTO> getAllAdmins() {
        return adminService.getAdmins();
    }

    @GetMapping("/get/{id}")
    public AdminDTO getAdminById(@PathVariable long id) {
        return adminService.getAdminById(id);
    }

    @PostMapping("/add")
    public ResponseEntity<AdminDTO> addAdmin(@RequestBody AdminDTO adminDTO) {
        AdminDTO created = adminService.createAdmin(adminDTO);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<AdminDTO> updateAdmin(@PathVariable long id, @RequestBody AdminDTO adminDTO) {
        AdminDTO updated = adminService.updateAdmin(id, adminDTO);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public  ResponseEntity<Void> deleteAdmin(@PathVariable long id) {
        adminService.deleteAdminById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
