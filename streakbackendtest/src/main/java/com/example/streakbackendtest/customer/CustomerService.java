package com.example.streakbackendtest.customer;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class CustomerService {
    public List<Customer> getCustomers() {
        return List.of(
                new Customer(
                        1L,
                        "customer",
                        "example@example.com",
                        "example",
                        LocalDate.of(2000, 1, 1),
                        "+123456789",
                        12345L,
                        "city",
                        "example street 1",
                        1,
                        1
                )
        );
    }
}
