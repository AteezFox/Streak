package com.example.streakbackendtest.company;

import jakarta.persistence.*;

@Entity
@Table
public class Company {

    @Id
    @SequenceGenerator(
            name = "company_sequence",
            sequenceName = "company_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "company_sequence"
    )

    private Long id;
    private String name;
    private String city;
    private String address;
    private int floor;
    private int door;

    public Company() {
    }

    public Company(Long id, String name, String city, String address, int floor, int door) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.address = address;
        this.floor = floor;
        this.door = door;
    }

    public Company(String name, String city, String address, int floor, int door) {
        this.name = name;
        this.city = city;
        this.address = address;
        this.floor = floor;
        this.door = door;
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

    public int getFloor() {
        return floor;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }

    public int getDoor() {
        return door;
    }

    public void setDoor(int door) {
        this.door = door;
    }

    @Override
    public String toString() {
        return "Company{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", city='" + city + '\'' +
                ", address='" + address + '\'' +
                ", floor=" + floor +
                ", door=" + door +
                '}';
    }
}
