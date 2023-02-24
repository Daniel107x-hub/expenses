package com.daniel107x.expenses.repository;

import com.daniel107x.expenses.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
