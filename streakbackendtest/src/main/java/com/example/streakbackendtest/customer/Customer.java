package com.example.streakbackendtest.customer;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table
public class Customer {

    @Id
    @SequenceGenerator(
        name = "customer_sequence",
        sequenceName = "customer_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "customer_sequence"
    )

    private Long id;
    private String name;
    private String email;
    private String password;
    private LocalDate birthDate;
    private String phone;
    private Long zip;
    private String city;
    private String address;
    private Integer floor;
    private Integer door;

    public Customer() {
    }

    public Customer(Long id, String name, String email, String password, LocalDate birthDate, String phone, Long zip, String city, String address, Integer floor, Integer door) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.birthDate = birthDate;
        this.phone = phone;
        this.zip = zip;
        this.city = city;
        this.address = address;
        this.floor = floor;
        this.door = door;
    }

    public Customer(String name, String email, String password, LocalDate birthDate, String phone, String city, Long zip, Integer floor, Integer door, String address) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.birthDate = birthDate;
        this.phone = phone;
        this.city = city;
        this.zip = zip;
        this.floor = floor;
        this.door = door;
        this.address = address;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Long getZip() {
        return zip;
    }

    public void setZip(Long zip) {
        this.zip = zip;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getFloor() {
        return floor;
    }

    public void setFloor(Integer floor) {
        this.floor = floor;
    }

    public Integer getDoor() {
        return door;
    }

    public void setDoor(Integer door) {
        this.door = door;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", birthDate=" + birthDate +
                ", phone='" + phone + '\'' +
                ", zip=" + zip +
                ", city='" + city + '\'' +
                ", address='" + address + '\'' +
                ", floor=" + floor +
                ", door=" + door +
                '}';
    }
}
