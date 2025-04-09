package com.example.productapi.dto;

import java.util.List;

public class OrderDTO {

    private List<Long> productIds;
    private String date;
    private String status;
    private int sumToPay;

    public List<Long> getProductIds() {
        return productIds;
    }

    public void setProductIds(List<Long> productIds) {
        this.productIds = productIds;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getSumToPay() {
        return sumToPay;
    }

    public void setSumToPay(int sumToPay) {
        this.sumToPay = sumToPay;
    }
}
