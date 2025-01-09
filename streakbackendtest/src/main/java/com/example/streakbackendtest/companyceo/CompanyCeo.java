package com.example.streakbackendtest.companyceo;

import jakarta.persistence.*;

@Entity
@Table
public class CompanyCeo {

    @Id
    @SequenceGenerator(
            name = "companyceo_sequence",
            sequenceName = "companyceo_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = jakarta.persistence.GenerationType.SEQUENCE,
            generator = "companyceo_sequence"
    )

    private Long id;
    private String ceoName;
    private String ceoEmail;
    private String ceoPassword;
    private String ceoPhoneNumber;

    public CompanyCeo() {
    }

    public CompanyCeo(Long id, String ceoName, String ceoEmail, String ceoPassword, String ceoPhoneNumber) {
        this.id = id;
        this.ceoName = ceoName;
        this.ceoEmail = ceoEmail;
        this.ceoPassword = ceoPassword;
        this.ceoPhoneNumber = ceoPhoneNumber;
    }

    public CompanyCeo(String ceoPhoneNumber, String ceoPassword, String ceoEmail, String ceoName) {
        this.ceoPhoneNumber = ceoPhoneNumber;
        this.ceoPassword = ceoPassword;
        this.ceoEmail = ceoEmail;
        this.ceoName = ceoName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCeoName() {
        return ceoName;
    }

    public void setCeoName(String ceoName) {
        this.ceoName = ceoName;
    }

    public String getCeoEmail() {
        return ceoEmail;
    }

    public void setCeoEmail(String ceoEmail) {
        this.ceoEmail = ceoEmail;
    }

    public String getCeoPassword() {
        return ceoPassword;
    }

    public void setCeoPassword(String ceoPassword) {
        this.ceoPassword = ceoPassword;
    }

    public String getCeoPhoneNumber() {
        return ceoPhoneNumber;
    }

    public void setCeoPhoneNumber(String ceoPhoneNumber) {
        this.ceoPhoneNumber = ceoPhoneNumber;
    }

    @Override
    public String toString() {
        return "CompanyCeo{" +
                "id=" + id +
                ", ceoName='" + ceoName + '\'' +
                ", ceoEmail='" + ceoEmail + '\'' +
                ", ceoPassword='" + ceoPassword + '\'' +
                ", ceoPhoneNumber='" + ceoPhoneNumber + '\'' +
                '}';
    }
}
