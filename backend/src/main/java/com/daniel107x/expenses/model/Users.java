package com.daniel107x.expenses.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@RestResource(rel = "users", path = "users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String lastName;
    private String userName;
    private String email;
    private String phone;
    private Date createdAt;
    @UpdateTimestamp
    private Date updatedAt;
    @Column(columnDefinition = "boolean default true")
    private boolean active;

    @PrePersist
    void createdAt(){
        this.createdAt = new Date();
    }
}
