package com.daniel107x.expenses.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import java.util.Date;

@MappedSuperclass
@Data
@NoArgsConstructor
public abstract class AbstractMoney {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;
    protected double quantity;
    protected String name;
    protected String description;
    protected Date appliedAt;
    protected Date createdAt;
    @UpdateTimestamp
    protected Date updatedAt;
    @Column(columnDefinition = "boolean default true")
    protected boolean active;
    @ManyToOne
    private Users user;

    @PrePersist
    void createdAt(){
        this.createdAt = new Date();
    }
}
