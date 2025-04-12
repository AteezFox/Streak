package com.example.productapi.repository;

import com.example.productapi.model.CEO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CEORepository extends JpaRepository<CEO, Long> {
}
