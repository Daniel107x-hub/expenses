/* Daniel107x (C)2023 */
package com.daniel107x.expenses.model;

import jakarta.persistence.*;
import java.util.Date;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@MappedSuperclass
public abstract class AbstractMoney {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double value;
    private String name;
    private String description;
    private Date dateApplied;
    @CreationTimestamp private Date created;
    @UpdateTimestamp private Date updated;
    private boolean isActive = true;

    public AbstractMoney() {}

    public AbstractMoney(
            Long id,
            double value,
            String name,
            String description,
            Date dateApplied,
            Date created,
            Date updated,
            boolean isActive) {
        this.id = id;
        this.value = value;
        this.name = name;
        this.description = description;
        this.dateApplied = dateApplied;
        this.created = created;
        this.updated = updated;
        this.isActive = isActive;
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

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }

    public boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(boolean isActive) {
        this.isActive = isActive;
    }
}
