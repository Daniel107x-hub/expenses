package com.daniel107x.expenses.dto;

import java.util.Date;

public abstract class MoneyDTO {
    private Long id;
    private double value;
    private String name;
    private String description;
    private Date dateApplied;

    public MoneyDTO() {
    }

    public MoneyDTO(Long id, double value, String name, String description, Date dateApplied) {
        this.id = id;
        this.value = value;
        this.name = name;
        this.description = description;
        this.dateApplied = dateApplied;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDateApplied() {
        return dateApplied;
    }

    public void setDateApplied(Date dateApplied) {
        this.dateApplied = dateApplied;
    }
}
