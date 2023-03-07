package com.daniel107x.expenses.repository;

import com.daniel107x.expenses.model.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface IncomeRepository extends JpaRepository<Income, Long> {
}
