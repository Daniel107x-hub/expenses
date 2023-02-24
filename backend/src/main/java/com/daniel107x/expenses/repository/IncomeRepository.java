package com.daniel107x.expenses.repository;

import com.daniel107x.expenses.model.Income;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IncomeRepository extends JpaRepository<Income, Long> {
}
